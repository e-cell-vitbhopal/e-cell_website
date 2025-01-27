import React from 'react';
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
} from 'react-icons/fa';
import '../../styles/footer-styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section" id="about-section">
                    <h3>About Us</h3>
                    <p>
                        E-Cell VIT Bhopal is a student-run organization dedicated to
                        promoting entrepreneurship and innovation among students.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <div className="social-media-item">
                            <a
                                href="https://www.instagram.com/ecell_vit.bhopal/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={30} color="#E1306C" />
                            </a>
                        </div>
                        <div className="social-media-item">
                            <a
                                href="https://twitter.com/ecell_vitb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter size={30} color="#1DA1F2" />
                            </a>
                        </div>
                        <div className="social-media-item">
                            <a
                                href="https://www.linkedin.com/company/e-cell-vit-bhopal/mycompany/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn
                                    className="media-icon"
                                    size={40}
                                    color="#0077B5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-section" id="contact-section">
                    <h3>Contact Info</h3>
                    <p>VIT Bhopal University</p>
                    <p>Bhopal-Indore Highway</p>
                    <p>Madhya Pradesh, India</p>
                    <p>Email: ecell@vitbhopal.ac.in</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} E-Cell VIT Bhopal. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;
