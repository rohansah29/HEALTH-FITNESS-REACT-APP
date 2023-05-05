import React from "react";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";

const nav__links = [
  {
    path: "#",
    display: "Home",
  },
  {
    path: "#",
    display: "Diet",
  },
  {
    path: "#",
    display: "Fees",
  },
  {
    path: "#",
    display: "Track your fitness",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Health & Fitness</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
