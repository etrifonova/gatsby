import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  header,
  main,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footer,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <header className={header}>
        <div className={siteTitle}>{data.site.siteMetadata.title}</div>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <div>LOGO</div>
        <div>2024</div>
        <div>e-trifonova</div>
      </footer>
    </div>
  );
};

export default Layout;
