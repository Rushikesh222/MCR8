import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { meetingData } from "../assets/Data";
import { filterReducer } from "../Reducer/Filterreducer";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const initailFilterState = {
    filter: "All",
  };
  const [filterEvent, DispatchFilter] = useReducer(
    filterReducer,
    initailFilterState
  );

  // const handleType = () => {
  //   let filterData = [];
  //   if (filterEvent.filter !== "All") {
  //     filterData = meetingData.filter(
  //       ({ EventType }) => EventType === filterEvent.filter
  //     );
  //   } else {
  //     filterData = meetingData;
  //   }
  //   setSortData(filterData);
  // };
  // useEffect(() => handleType(), [filterEvent.filter]);
  return (
    <CardContext.Provider
      value={{ handleType, meetingData, filterEvent, DispatchFilter, sortData }}
    >
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
