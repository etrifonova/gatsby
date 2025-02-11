import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/svg/logo.svg";
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
          className="burger-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link className="nav__link" to="/about" activeClassName="active">
                Автор
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" to="/blog" activeClassName="active">
                Блог
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__link" to="/verbsExerciser" activeClassName="active">
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
