import { Link, NavLink, useNavigate } from "react-router-dom";
import { FooterElement } from "./Footer.element";

export const Footer = () => {
  return (
    <>
    <FooterElement>
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
            <NavLink to={"/feed"} >
                Feed
              </NavLink>
         

           
           
              <NavLink to={"/roomSearch"} >
                Room Search
              </NavLink>
          

        
              <NavLink to={"/createRoom"} >
                Create Room
              </NavLink>
        
              <NavLink to={"/createPost"} >
                Create Post
              </NavLink>
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
      </FooterElement>
    </>
  );
};
