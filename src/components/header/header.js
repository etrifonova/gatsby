import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/svg/logo_gray.svg";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="grid-container">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <Logo className="header__logo-img" />
        </Link>

        {/* Burger Menu Button */}
        <button
          className={`burger-menu ${isOpen ? "burger-menu--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="burger-menu__line"></span>
          <span className="burger-menu__line"></span>
          <span className="burger-menu__line"></span>
        </button>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
          <ul className="nav__list menu-items">
            <li className="nav__list-item">
              <Link
                className="nav__link"
                to="/about"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Автор
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                className="nav__link"
                to="/blog"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Блог
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                className="nav__link"
                to="/verbsExerciser"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Глаголы
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
