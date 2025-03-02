import React, { useState } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual Google Form URL
    const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfpKEPEekpol68ysDXtoKKYq6hxAy3G-0NXJLhcDSdPxCvJmQ/formResponse"

    const formDataGoogle = new URLSearchParams();
    formDataGoogle.append("entry.1925962279", formData.name); // Name field
    formDataGoogle.append("entry.1734099269", formData.email); // Email field
    formDataGoogle.append("entry.658110468", formData.subject); // Subject field
    formDataGoogle.append("entry.1245238083", formData.message); // Message field

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formDataGoogle,
    })
      .then(() => {
        setFormStatus({ submitted: true, error: false });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => setFormStatus({ submitted: false, error: true }));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact Us</h2>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">📍</div>
              <div className="contact__info-text">
                <h3>Location</h3>
                <p>VIT Bhopal University<br />Bhopal-Indore Highway<br />Madhya Pradesh – 466114</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">📧</div>
              <div className="contact__info-text">
                <h3>Email</h3>
                <p>ecell@vitbhopal.ac.in<br />esummit@ecellvitbhopal.ac.in</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">📱</div>
              <div className="contact__info-text">
                <h3>Phone</h3>
                <p>Aryan Arora : +91 82871 47102<br />Sushil Shetty : +91 96522 48514<br/>Aditi Lande : +91 93731 40046</p>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            {formStatus.submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully.</p>
                <button
                  className="contact__reset-btn"
                  onClick={() => setFormStatus({ submitted: false, error: false })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contact__input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact__submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
