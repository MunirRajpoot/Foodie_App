import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  mt-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h4 className="warning">FOODIE</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
              <li className="nav-item ms-2">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button className="book-btn">Booking Now</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
