import * as React from "react"
import { Link } from "gatsby"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="grid-container">
      <div className="footer_copyright">
        © {new Date().getFullYear()} &middot; Елена Трифонова
      </div>
      {/* <div className="footer_social-list">
        <ul>
          <li>
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer_icon">TG</div>
            </a>
          </li>
          <li>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
              <div className="footer_icon">VK</div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer_icon">GH</div>
            </a>
          </li>
        </ul>
      </div> */}
    </footer>
  )
}

export default Footer
