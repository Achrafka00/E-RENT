import React from "react";
import { Link } from "react-router-dom";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact">
              <button className="btn5">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
        <div className="footer-logo">
              <Link to="/" className="footer-logo-link">
                <i className="fa fa-home footer-logo-icon"></i>{" "}
                {/* Home icon */}
                <span className="footer-logo-text">E-Rent</span>
              </Link>
          <div className="box">
              <h2 className="footer-heading">
                Do You Need Help With Anything?
              </h2>
              <p className="footer-text">
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month.
              </p>

              <div className="input flex">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="email-input"
                />
                <button className="btn-blue">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, i) => (
                  <li key={i}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
          © 2025 E-Rent. Designed By Kaa-ouarda Achraf & EL amrani Zouhir .
        </span>
      </div>
    </>
  );
};

export default Footer;
