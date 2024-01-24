import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/pages/Announcement";
import Dashboard from "./components/pages/Dashboard";
import History from "./components/pages/History";
import Officers from "./components/pages/Officers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/DonatOrca/" element={<Dashboard />}></Route>
        <Route
          path="/DonatOrca/announcement"
          element={<Announcement />}
        ></Route>
        <Route path="/DonatOrca/history" element={<History />}></Route>
        <Route path="/DonatOrca/officers" element={<Officers />}></Route>
      </Routes>
    </>
  );
}

export default App;
