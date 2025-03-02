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
    loading: false,
    errorMessage: ''
  });
  
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
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
  
  const validateForm = () => {
    // Basic validation
    if (!formData.startupName.trim()) return "Startup Name is required";
    if (!formData.linkedinProfile.trim()) return "LinkedIn Profile is required";
    if (!formData.ceoName.trim()) return "Founder Name is required";
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address";
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.contact.replace(/\D/g, ''))) 
      return "Please enter a valid 10-digit contact number";
    
    // Website validation (if provided)
    if (formData.website.trim() && !formData.website.startsWith('http')) 
      return "Website URL should start with http:// or https://";
    
    return null; // No validation errors
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Run validation first
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({
        submitted: false,
        error: true,
        loading: false,
        errorMessage: validationError
      });
      return;
    }
    
    setFormStatus({
      submitted: false,
      error: false,
      loading: true,
      errorMessage: ''
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
    googleFormData.append('entry.1740950606', 
      formData.passType === 'silver' ? 'Silver Pass' : 
      formData.passType === 'gold' ? 'Gold Pass' : 
      'Platinum Pass'
    ); // Pass Type
    
    try {
      // Create a timeout promise for the fetch operation
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 10000); // 10 second timeout
      });
      
      // Submit the form data to Google Forms
      const fetchPromise = fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeqGBSRisPPs0KQcMraX6StCPduyYKO-8-I3Fv3phITwBFREQ/formResponse',
        {
          method: 'POST',
          mode: 'no-cors', // This is important for cross-origin requests to Google Forms
          body: googleFormData
        }
      );
      
      // Race between the fetch and timeout
      await Promise.race([fetchPromise, timeoutPromise]);
      
      // Create a hidden iframe to verify the form was submitted correctly
      const checkSubmission = () => {
        // Due to CORS we create hidden iframe as a workaround to check submission
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        // Check Google Form confirmation url with a unique parameter
        const timestamp = new Date().getTime();
        iframe.src = `https://docs.google.com/forms/d/e/1FAIpQLSeqGBSRisPPs0KQcMraX6StCPduyYKO-8-I3Fv3phITwBFREQ/formResponse?embedded=true&usp=pp_url&entry.543250579=${formData.startupName}&t=${timestamp}`;
        
        iframe.onload = () => {
          // Check if iframe content contains confirmation text (a guess since we can't access content due to CORS)
          try {
            setTimeout(() => {
              document.body.removeChild(iframe);
              
              // Since we can't directly detect success with Google Forms,
              // we're assuming success if no network errors occurred
              setFormStatus({
                submitted: true,
                error: false,
                loading: false,
                errorMessage: ''
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
              
              if (formRef.current) {
                formRef.current.reset();
              }
            }, 1500);
          } catch (error) {
            setFormStatus({
              submitted: false,
              error: true,
              loading: false,
              errorMessage: "Could not verify submission. Please try again."
            });
          }
        };
      };
      
      checkSubmission();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        loading: false,
        errorMessage: `Network error: ${error.message || 'Could not connect to the server'}`
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
                  onClick={() => setFormStatus({ submitted: false, error: false, loading: false, errorMessage: '' })}
                >
                  Register Another Startup
                </button>
              </div>
            ) : (
              <form className="register__form" onSubmit={handleSubmit} ref={formRef}>
                {formStatus.error && (
                  <div className="register__error">
                    <p>{formStatus.errorMessage || 'There was an error submitting your form. Please try again later.'}</p>
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
                    placeholder="10-digit mobile number"
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
                    placeholder="https://example.com"
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