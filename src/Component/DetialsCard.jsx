import { useParams } from "react-router-dom";
import { useData } from "../Context/CardContext";
import { useState } from "react";
export const DetialsCard = () => {
  const { id } = useParams();
  const { meetingData } = useData;
  return (
    <div>
      <h1></h1>
    </div>
  );
};
