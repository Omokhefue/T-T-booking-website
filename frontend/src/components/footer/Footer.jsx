import "./footer.css";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h4>Need Help</h4>
        <div className="footer-contact-info">
          <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
          <div className="footer-contact-details">
            <p>Got Questions</p>
            <p>Call us: +1(234) 567-8901 </p>
          </div>{" "}
        </div>
        <div className="footer-address">
          <h4 className="footer-section-heading">Contact Info</h4>
          <p>12345 Avenue street, Casa</p>
          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faSnapchat} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <div className="footer-section-list">
          <p>About Us</p>
          <p>Careers</p>
          <p>Terms Of Use</p>
          <p>Privacy Statement</p>
          <p>Give us Feedbacks</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Other Services</h4>
        <div className="footer-section-list">
          <p>Investor Relations</p>
          <p>Rewards Program</p>
          <p>Point PLUS</p>
          <p>Partners</p>
          <p>List My Hotel</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <div className="footer-section-list">
          <p>Account</p>
          <p>Legal</p>
          <p>Contact</p>
          <p>Affiliate Program</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Mailing List</h4>
        <div className="footer-section-list">
          <p>Sign up to get latest offers</p>
          <div className="footer-section-subscribe">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <small>*children are from 12 and under</small>
    </footer>
  );
};
export default Footer;
