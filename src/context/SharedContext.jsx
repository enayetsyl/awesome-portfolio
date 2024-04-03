import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "../constant";

const SharedContext = createContext();

const SharedContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
        );

        const data = await response.json();
        setUserData(data.user);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, []);

  if(isLoading){
    return <Loading/>
  }

  console.log(userData);

  const value = {
    isLoading,
    setIsLoading,
    userData,
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
};

export default SharedContextProvider;

export const useSharedContext = () => {
  return useContext(SharedContext);
};
