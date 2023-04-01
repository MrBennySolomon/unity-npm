import { useState, createContext, useContext } from "react";
const AppContext = createContext([]);

const AppProvider = ({ children }) => {

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isError,
        setIsError,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
