import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/pages/Announcement";
import Dashboard from "./components/pages/Dashboard";
import History from "./components/pages/History";
import Officers from "./components/pages/Officers";
import "./App.css";
import "./Fonts.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/DonatReact/" element={<Dashboard />}></Route>
        <Route
          path="/DonatReact/announcement"
          element={<Announcement />}
        ></Route>
        <Route path="/DonatReact/history" element={<History />}></Route>
        <Route path="/DonatReact/officers" element={<Officers />}></Route>
      </Routes>
    </>
  );
}

export default App;
