import React, { useState, useRef, useContext, useCallback } from 'react';
import { COINS_API } from './Data/Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinList, setCoinList] = useState([]);
  const savedCoins = useRef([]);

  const fetchCoins = useCallback(
    async (unit, count, reqCount) => {
      setIsLoading(true);
      try {
        const response = await fetch(COINS_API + `/markets?vs_currency=${unit}&page=${reqCount}&per_page=${count}&price_change_percentage=1h,24h,7d`);
        const data = await response.json();
        let coinData = await data.map(coin => Object.assign(coin, {booked: false}));
        if (reqCount > 1) {
          coinData = savedCoins.current.concat(coinData);
        }
        setCoinList(coinData);
        savedCoins.current = coinData;
        setIsLoading(false);
      }
      catch(err) {
        console.log(err);
        setIsLoading(false);
      }
    }
  , [])

  const filterCoins = (filter) => {
    if (filter === '북마크') {
      const filteredList = coinList.filter(coin => coin.booked === true);
      savedCoins.current = coinList;
      setCoinList(filteredList);
    }
    else {
      setCoinList(savedCoins.current);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        coinList,
        setCoinList,
        savedCoins,
        fetchCoins,
        filterCoins,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Context is not finded.');
  }
  return context;
} 

export { AppContext, AppProvider };