import React from "react";
import "./navbar.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const heart_img = require("../../assets/heart.png");
const Navbar = () => {
  const { isNavbarOpen, openNavbar, closeNavbar, openHearts, hearts } =
    useGlobalContext();

  return (
    <div className={"parallax-container"}>
      <div className={"parallax"}>
        {hearts ? <img src={heart_img} alt="error" className="hearts" /> : null}

        <header className={"l-header"} id="header">
          <nav className={"nav bd-container"}>
            <Link to="/" className={"nav__logo"}>
              على خطى ليلى
            </Link>

            <div
              className={`${
                isNavbarOpen ? "show-menu  nav__menu" : "nav__menu"
              }`}
              id="nav-menu"
            >
              <ul className={"nav__list"}>
                <div className={"nav__toggle close"} onClick={closeNavbar}>
                  <i className={"bx bx-window-close"}></i>
                </div>
                <Link to="/" className={"nav__link"} onClick={openHearts}>
                  <li className={"nav__item"}> لن ننساك أبداً</li>
                </Link>
                <Link
                  to="/aala-khouta-leila"
                  className={"nav__link"}
                  onClick={closeNavbar}
                >
                  <li className={"nav__item"}>على خطى ليلى</li>
                </Link>
                <Link to="/" className={"nav__link"} onClick={openHearts}>
                  <li className={"nav__item"}> نحبك</li>
                </Link>
                <Link
                  to="/souwar"
                  className={"nav__link"}
                  onClick={closeNavbar}
                >
                  <Link
                    to="/laki"
                    className={"nav__link"}
                    onClick={closeNavbar}
                  >
                    <li className={"nav__item"}>لك</li>
                  </Link>
                  <li className={"nav__item"}> صور</li>
                </Link>
              </ul>
            </div>

            <div
              className={"nav__toggle"}
              onClick={isNavbarOpen ? closeNavbar : openNavbar}
            >
              <i className={"bx bx-menu"}></i>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
