import { useData } from "../Context/CardContext";
import { useNavigate } from "react-router-dom";
export const Card = () => {
  const { meetingData, filterEvent, DispatchFilter } = useData();
  const navigate = useNavigate();
  const filterData =
    filterEvent.filter !== "All"
      ? meetingData.filter(({ EventType }) => EventType === filterEvent.filter)
      : meetingData;
  return (
    <div>
      <h1>Meeting Event</h1>
      <select
        onChange={(e) =>
          DispatchFilter({
            type: "Set_filter",
            payload: e.target.value,
          })
        }
      >
        <option value="All">All</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
      <div className="Card-Container">
        {filterData.map((items) => {
          const { image, date, title, openHour, EventType, id } = items;

          return (
            <div
              onClick={() => navigate(`/details/${id}`)}
              className="card-detials"
              key={id}
            >
              <div className="image-detils">
                <img src={image} />
                <h2>{EventType}</h2>
              </div>
              <p>
                `${date} ${openHour}`
              </p>
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
