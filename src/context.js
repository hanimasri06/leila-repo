import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [hearts, setIsHeartsOpen] = useState(false);
  const openNavbar = () => {
    setIsNavbarOpen(true);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openHearts = () => {
    setIsHeartsOpen(true);
    setTimeout(() => {
      setIsHeartsOpen(false);
    }, 5000);
  };

  return (
    <AppContext.Provider
      value={{
        isNavbarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openNavbar,
        closeNavbar,
        info,
        setInfo,
        openHearts,
        hearts,
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
