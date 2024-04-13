import React, { useState } from 'react';
import Logo from '../../images/ecell-logo-dark.png';
import './registration.css';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [contact, setContact] = useState('');
  const [batch, setBatch] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('entry.77227845', name);
      formData.append('entry.406986501', email);
      formData.append('entry.185878138', regNo);
      formData.append('entry.1226879940', contact);
      formData.append('entry.450796559', batch);

      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSe_7D9BJyY3s_Y2WxCpjkbX1CLM0xtKUjHF2mlo_iHJ86sUqg/formResponse", {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      alert("Error occurred while submitting the form.");
    }
  };

  const validate = (()=>{
    if (!name || !email || !regNo || !contact || !batch) {
      alert("All fields are required.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    setPage(2);
  })

  return (
    <div className='form-body'>
      <img src={Logo} style={{height: '80px'}} alt='e-cell vit bhopal' />
      <div className='form-container'>
        <h2 className='heading'>Registration Form</h2>
      
        <form className='registration-form'>
        {page==1?
        <>
        <div className="registration-form-unit">
          <input type="text" name="name" id="name" autoComplete="off" required value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="name" className="label-name">
            <span className="content-name">
              Name
            </span>
          </label>
        </div>

        <div className="registration-form-unit">
          <input type="text" name="email" id="email" autoComplete="off" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email" className="label-name">
            <span className="content-name">
              Email
            </span>
          </label>
        </div>

        <div className="registration-form-unit">
          <input type="text" name="regno" id="regno" autoComplete="off" required value={regNo} onChange={(e) => setRegNo(e.target.value)} />
          <label htmlFor="regno" className="label-name">
            <span className="content-name">
              Registration Number
            </span>
          </label>
        </div>

        <div className="registration-form-unit">
          <input type="text" name="contact" id="contact" autoComplete="off" required value={contact} onChange={(e) => setContact(e.target.value)} />
          <label htmlFor="contact" className="label-name">
            <span className="content-name">
              Mobile Number
            </span>
          </label>
        </div>

        <div className='batch'>
          <label>
            <span>Batch</span>
          </label>
          <div className="batch-options">
            <div>
              <input type="radio" id="batch21" name="batch" value="21" required checked={batch === '21'} onChange={() => setBatch('21')} />
              <label htmlFor="batch21">21</label>
            </div>
            <div>
              <input type="radio" id="batch22" name="batch" value="22" required checked={batch === '22'} onChange={() => setBatch('22')} />
              <label htmlFor="batch22">22</label>
            </div>
            <div>
              <input type="radio" id="batch23" name="batch" value="23" required checked={batch === '23'} onChange={() => setBatch('23')} />
              <label htmlFor="batch23">23</label>
            </div>
          </div>
        </div>
  
          <div className='btn-container'>
            <button onClick={validate}>Next</button> 
          </div>
          </>
        :
        <>
          <div className='btn-container'>
            <button onClick={()=>setPage(1)}>Prev</button> 
            <button onSubmit={handleSubmit}>Submit</button> 
          </div>
          
        </>
        }
        </form>


        {submitted && <p>Form submitted successfully!</p>}
      </div>
    </div>
  );
}

export default Registration;
