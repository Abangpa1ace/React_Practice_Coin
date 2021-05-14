import React, { useState, useContext, useCallback } from 'react';
import { COINS_API } from './Data/Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinList, setCoinList] = useState([]);

  const fetchCoins = useCallback(
    async (unit, count) => {
      setIsLoading(true);
      try {
        const response = await fetch(COINS_API + `/markets?vs_currency=${unit}&per_page=${count}`);
        const data = await response.json();
        setCoinList(data);
        setIsLoading(false);
      }
      catch(err) {
        console.log(err);
      }
    }
  , [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        fetchCoins,
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