import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column ">
            <h2>About Us</h2>
            <ul>
              {" "}
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>Careers</li>
              <li>Owners</li>
              <li>Stack</li>
            </ul>
          </div>
          <div className="footer-column ">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Page 1</a>
              </li>
              <li>
                <a>Page 2</a>
              </li>
              <li>
                <a>Page 3</a>
              </li>
              <li>
                <a>Page 4</a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="footer-column ">
            <h2>FAQs</h2>
            <ul>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-column ">
            <h2>Follow Us</h2>
            <ul>
              <li>Linkedin</li>
              <li>Gmail</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Connect-a-mate. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
