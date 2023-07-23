import React, { useState, useEffect } from "react";
import "./index.css";

import { useCookies } from "react-cookie";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ Token }, , removeToken] = useCookies("Token");
  const [showNavbar, setshowNavbar] = useState(Token ? true : false);

  const handleLogout = () => {
    removeToken("Token");
    setshowNavbar(false);
    navigate("/login");
  };

  useEffect(() => {
    console.log(Token);

    if (Token !== undefined) {
      setshowNavbar(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
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
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarSupportedContent"
        >
          {showNavbar ? (
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/createCourse"} className="nav-link" href="hello">
                  Create Course
                </Link>
              </li>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          ) : (
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signup"} className="nav-link" href="hello">
                  Signup{" "}
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
