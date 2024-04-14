import React from 'react';

function BasicInfo({ name, setName, email, setEmail, regNo, setRegNo, contact, setContact, batch, setBatch, page, setPage }) {
  const validate = (e) => {
    e.preventDefault()
    if (!name || !email || !regNo || !contact || !batch) {
      alert("All fields are required.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    setPage(page+1);
  };

  return (
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
        <button onClick={(e) => validate(e)}>Next</button> 
      </div>
    </>
  );
}

export default BasicInfo;
