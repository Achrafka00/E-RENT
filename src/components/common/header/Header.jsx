import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
  const [navList, setNavList] = useState(false); // Add state for navList toggle

  // Handle log out
  function click() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/"; 
  }

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to="/" className="logo-link">
            <i className="fa fa-home logo-icon"></i>
            <span className="logo-text">E-Rent</span>
          </Link>
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="button flex">
          {!window.localStorage.getItem("email") ? (
            <div>
              <Link to="/SignIn">
                <button className="btn1">
                  <i className="fa fa-sign-in"></i> SignIn
                </button>
              </Link>
            </div>
          ) : 
            <div>
              <button onClick={click} className="btn1">
                <i className="fa fa-sign-out-alt"></i> LogOut
              </button>
            </div>
          }
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
