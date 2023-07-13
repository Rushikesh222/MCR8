import { useData } from "../Context/CardContext";

export const NavBar = () => {
  const {} = useData;
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <div className="Nav-container">
      <img />
      <input type="text" onChange={handleSearch} />
    </div>
  );
};
