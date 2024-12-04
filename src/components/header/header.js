import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../assets/svg/logo.svg";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header className="grid-container">
    <div className="header__container">
      <Link className="header__logo" to="/">
        <Logo className="header__logo-img" />
      </Link>
      <nav>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="nav__link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
