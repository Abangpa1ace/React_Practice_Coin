import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { COINS_API } from './Data/Config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchList = async () => {
    try {
      const response = await fetch(COINS_API+'/markets?vs_currency=krw&per_page=10');
      const result = await response.json();
      console.log(result); 
    }
    catch(err) {
      console.log(err);
    }
  }

  fetchList();

  return (
    <AppContext.Provider
      value={{
        isLoading,
        fetchList,
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