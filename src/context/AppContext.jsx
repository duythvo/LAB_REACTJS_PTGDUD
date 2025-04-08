import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [recips, setRecips] = useState([]);

  //Them vao Box
  const addToBox = (item) => {
    setRecips((prev) => [...prev, item]);
  };

  //Xoa khoi Box
  const removeFromBox = (id) => {
    setRecips(recips.filter((item) => item._id !== id));
  };

  const totalInBox = recips.length;

  const value = {
    recips,
    addToBox,
    removeFromBox,
    totalInBox,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
