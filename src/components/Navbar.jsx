import { Link } from "react-router-dom";
import dropDownMenu from "../assets/svg/DropDownMenu.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={dropDownMenu} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/DonatOrca/" className="nav-link">
                Dashboard
              </Link>
              <Link to="/DonatOrca/announcement" className="nav-link">
                Announcement
              </Link>
              <Link to="/DonatOrca/officers" className="nav-link">
                Officers
              </Link>
              <Link to="/DonatOrca/history" className="nav-link">
                History
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
