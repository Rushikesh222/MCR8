import { createContext, useContext, useState } from "react";
import { meetingData } from "../assets/Data";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  //   const [tags, setTags] = useState("");
  //   setTags(() =>
  //     meetingData.map((list) => list.eventTage.map((items) => items))
  //   );
  //   console.log(tags);

  return (
    <CardContext.Provider value={{ meetingData }}>
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
