import { createContext, useContext, useEffect, useState } from "react";
import { Loading } from "../constant";
import { toast } from "react-toastify";

const SharedContext = createContext();

const SharedContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  // Contact form States

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  //  Hero Tooltip
  const [quoteTooltip, setQuoteTooltip] = useState(false);
  const [descriptionTooltip, setDescriptionTooltip] = useState(false);
  
  // Contact form submit handler
  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    toast.success('Form Submitted')
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  };

  // Project card states
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Project tech stack filter handler
  const handleFilterChange = (filter) => {
    if (selectedFilters?.includes(filter.trim())) {
      setSelectedFilters(selectedFilters?.filter((f) => f !== filter.trim()));
    } else {
      setSelectedFilters([...selectedFilters, filter?.trim()]);
    }
  };


  // Fetching API data
  useEffect(() => {
    const getUserData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
        );

        const data = await response.json();
        setUserData(data.user);
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
    userData,firstName, setFirstName,lastName, setLastName,email, setEmail,message, setMessage,handleContactFormSubmit,quoteTooltip, setQuoteTooltip,descriptionTooltip, setDescriptionTooltip,hoveredIndex, setHoveredIndex,selectedFilters, setSelectedFilters,handleFilterChange
  };

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  );
};

export default SharedContextProvider;

export const useSharedContext = () => {
  return useContext(SharedContext);
};
