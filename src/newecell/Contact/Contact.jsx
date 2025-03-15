import React from 'react';
import { MapPin, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="ecell-contact-section">
      <h2 className="ecell-contact-title">Contact Us</h2>
      <div className="ecell-contact-container">
        <div className="ecell-contact-info">
          <h3 className="ecell-contact-info-title">Get in Touch</h3>
          <div className="ecell-contact-details">
            <div className="ecell-contact-item">
              <MapPin size={24} />
              <span>VIT Bhopal University, Kothri Kalan, Sehore, MP</span>
            </div>
            <div className="ecell-contact-item">
              <Mail size={24} />
              <span>ecell@vitbhopal.ac.in</span>
            </div>
          </div>
          <div className="ecell-social-links">
            <a href="https://www.instagram.com/ecell_vit.bhopal/" target="_blank" rel="noopener noreferrer" className="ecell-social-link">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/ecell_vitb" target="_blank" rel="noopener noreferrer" className="ecell-social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://www.linkedin.com/company/e-cell-vit-bhopal/mycompany/" target="_blank" rel="noopener noreferrer" className="ecell-social-link">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <form className="ecell-contact-form" onSubmit={handleSubmit}>
          <div className="ecell-form-group">
            <label htmlFor="name" className="ecell-form-label">Name</label>
            <input type="text" id="name" className="ecell-form-input" placeholder="Your Name" required />
          </div>
          <div className="ecell-form-group">
            <label htmlFor="email" className="ecell-form-label">Email</label>
            <input type="email" id="email" className="ecell-form-input" placeholder="Your Email" required />
          </div>
          <div className="ecell-form-group">
            <label htmlFor="message" className="ecell-form-label">Message</label>
            <textarea id="message" className="ecell-form-textarea" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="ecell-submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
