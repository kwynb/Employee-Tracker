import "./Header.css";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <MdWork color="white" size="1.5rem" id="work" />
        <a className="ms-2 navbar-brand display-2" href="#1" id="brand">
          Employment Management System
        </a>
          {/* <div className="text-uppercase">
            <button
              id="toggler"
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navigationBar"
              aria-controls="navigationBar"
              aria-expanded="false"
              aria-label="Navigation Toggle"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigationBar">
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#2">
                    Employees
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#3">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#4">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : ( */}
          <div className="ms-auto text-light me-3">
            <Link to="/" className="text-light text-decoration-none"> LOGIN</Link>
          </div>
      </div>
    </nav>
  );
};

export default Header;
