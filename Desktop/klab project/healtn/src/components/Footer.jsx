import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../assets/Styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h2>Sign up for membership</h2>
                    <button className="join-btn">Join now</button>
                </div>

                <div className="footer-bottom">
                    <div className="links-footer">
                    <div className="location">
                        <span className="location-icon">⚪</span> 
                        <span className="location-text">Your Location (ALL) ⌄</span>
                    </div>

                    <div className="footer-links">
                        <a href="#">Blog</a>
                        <a href="#">Media center</a>
                        <a href="#">About</a>
                        <a href="#">Sponsored membership</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Give a membership</a>
                    </div>
                    </div>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
