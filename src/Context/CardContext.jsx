import { createContext, useContext, useState } from "react";
import { meetingData } from "../assets/Data";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [sortData, setSortData] = useState([]);
  //   setTags(() =>
  //     meetingData.map((list) => list.eventTage.map((items) => items))
  //   );
  //   console.log(tags);
  const handleType = (event) => {};

  return (
    <CardContext.Provider value={{ handleType, meetingData }}>
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
