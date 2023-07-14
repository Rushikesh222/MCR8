import { useData } from "../Context/CardContext";
import { useNavigate } from "react-router-dom";
export const Card = () => {
  const { handleType, sortData, meetingData } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Meeting Event</h1>
      <select onChange={handleType}>
        <option value="">Type</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>
      <div className="Card-Container">
        {meetingData.map((items) => {
          const { image, date, title, openHour, EventType, id } = items;
          console.log(image);

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
