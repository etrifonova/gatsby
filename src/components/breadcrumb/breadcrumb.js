import React from "react"
import { Link } from "gatsby"
import "./breadcrumb.css"

const BreadCrumb = ({ category, postTitle }) => (
  <div className="breadcrumb_container">
    <Link className="breadcrumb_link"to="/">
      <span>На главную</span>
    </Link>
    <div className="arrow__container"><i className="arrow right"></i></div>
    <Link className="breadcrumb_link" to="/blog">
      <span>Блог</span>
    </Link>
    
    {category ? (
      <>
    <div className="arrow__container"><i className="arrow right"></i></div>
        <Link className="breadcrumb_link" to="/">
      <span>{category}</span>
        </Link>
      </>
    ) : null}

    
    {postTitle ? (
      <>
    <div className="arrow__container"><i className="arrow right"></i></div>
        <Link className="breadcrumb_link" to="/">
      <span>{postTitle}</span>
        </Link>
      </>
    ) : null}
  </div>
)

export default BreadCrumb
