import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Page/Home";
import { Details } from "./Page/Details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
