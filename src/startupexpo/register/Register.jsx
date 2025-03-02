import React, { useState, useEffect, useRef } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    startupName: '',
    linkedinProfile: '',
    ceoName: '',
    email: '',
    contact: '',
    website: '',
    yearlyRevenue: '',
    passType: 'silver' // Default pass type
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    loading: false
  });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('register--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      error: false,
      loading: true
    });

    // Create form data for submission
    const googleFormData = new FormData();
    
    // Map the form fields to Google Form entry fields
    googleFormData.append('entry.543250579', formData.startupName); // Startup Name
    googleFormData.append('entry.1664301567', formData.linkedinProfile); // LinkedIn Profile
    googleFormData.append('entry.71186997', formData.ceoName); // CEO Name
    googleFormData.append('entry.574092446', formData.email); // Email
    googleFormData.append('entry.1250901177', formData.contact); // Contact
    googleFormData.append('entry.1900765220', formData.website); // Website
    googleFormData.append('entry.1477682978', formData.yearlyRevenue); // Yearly Revenue
    // If Google Form expects "Silver Pass" instead of "silver"
googleFormData.append('entry.1740950606', 
    formData.passType === 'silver' ? 'Silver Pass' : 
    formData.passType === 'gold' ? 'Gold Pass' : 
    'Platinum Pass'
  ); // Pass Type
    
    try {
      // Submit the form data to Google Forms
      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeqGBSRisPPs0KQcMraX6StCPduyYKO-8-I3Fv3phITwBFREQ/formResponse',
        {
          method: 'POST',
          mode: 'no-cors', // This is important for cross-origin requests to Google Forms
          body: googleFormData
        }
      );
      
      // Note: due to CORS policy, we won't get a meaningful response back
      // So we'll just assume success after a delay
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          error: false,
          loading: false
        });
        
        // Reset form after submission
        setFormData({
          startupName: '',
          linkedinProfile: '',
          ceoName: '',
          email: '',
          contact: '',
          website: '',
          yearlyRevenue: '',
          passType: 'silver'
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        loading: false
      });
    }
  };

  return (
    <section className="register" id="register" ref={sectionRef}>
      <div className="register__container">
        <h2 className="register__title">Register For Startup Expo</h2>
        <div className="register__content">
          <div className="register__form-container">
            {formStatus.submitted ? (
              <div className="register__success">
                <div className="register__success-icon">✅</div>
                <h3>Registration Successful!</h3>
                <p>Thank you for registering your startup. We'll review your application and get back to you shortly.</p>
                <button 
                  className="register__button"
                  onClick={() => setFormStatus({ submitted: false, error: false, loading: false })}
                >
                  Register Another Startup
                </button>
              </div>
            ) : (
              <form className="register__form" onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="register__error">
                    <p>There was an error submitting your form. Please try again later.</p>
                  </div>
                )}
                
                <div className="register__form-group">
                  <label htmlFor="startupName" className="register__label">Startup Name *</label>
                  <input
                    type="text"
                    id="startupName"
                    name="startupName"
                    className="register__input"
                    value={formData.startupName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="linkedinProfile" className="register__label">LinkedIn Profile *</label>
                  <input
                    type="text"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    className="register__input"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="ceoName" className="register__label">Name of Founder *</label>
                  <input
                    type="text"
                    id="ceoName"
                    name="ceoName"
                    className="register__input"
                    value={formData.ceoName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="email" className="register__label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="register__input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="contact" className="register__label">Contact Number *</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    className="register__input"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="website" className="register__label">Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="register__input"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="yearlyRevenue" className="register__label">Yearly Revenue (in INR) *</label>
                  <input
                    type="text"
                    id="yearlyRevenue"
                    name="yearlyRevenue"
                    className="register__input"
                    value={formData.yearlyRevenue}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="register__form-group">
                  <label htmlFor="passType" className="register__label">Select Pass Type *</label>
                  <div className="register__radio-group">
                    <div className="register__radio-option">
                      <input
                        type="radio"
                        id="silver"
                        name="passType"
                        value="silver"
                        checked={formData.passType === 'silver'}
                        onChange={handleChange}
                        className="register__radio"
                      />
                      <label htmlFor="silver" className="register__radio-label">Silver Pass</label>
                    </div>
                    <div className="register__radio-option">
                      <input
                        type="radio"
                        id="gold"
                        name="passType"
                        value="gold"
                        checked={formData.passType === 'gold'}
                        onChange={handleChange}
                        className="register__radio"
                      />
                      <label htmlFor="gold" className="register__radio-label">Gold Pass</label>
                    </div>
                    <div className="register__radio-option">
                      <input
                        type="radio"
                        id="platinum"
                        name="passType"
                        value="platinum"
                        checked={formData.passType === 'platinum'}
                        onChange={handleChange}
                        className="register__radio"
                      />
                      <label htmlFor="platinum" className="register__radio-label">Platinum Pass</label>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="register__button"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? 'Submitting...' : 'Submit Registration'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;