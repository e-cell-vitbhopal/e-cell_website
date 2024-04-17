import React, { useState, useEffect } from 'react';
import Logo from '../../images/ecell-logo-dark.png';
import './registration.css';
import FormRendering from './FormRendering';
import submitForms from './submitForms';

function Registration() {
  const eventFees = {
    "Speaker Session: Ishaan Sharma": 150,
    "Paper Trading Competition 1": 75,
    "Paper Trading Competition 2": 150,
    "Paper Trading Competition": 150,
    "Internship/Job Fair": 50,
    "Silent Disco": 200,
    "IPL Auction": 250,
    "Product Design 3": 150,
    "Product Design 4": 200,
    "Product Design 5": 250,
    "Product Design Competition": 250,
    "Fire Side Chat": 75,
    "Case Study Competition": 200,
  };

  const [heading, setHeading] = useState('Registration Form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [contact, setContact] = useState('');
  const [batch, setBatch] = useState('');
  const [tranID, settranID] = useState('');
  const [screenshot, setScreenShot] = useState('');

  const [selectedEvents, setSelectedEvents] = useState([]);
  const [confirmedEvents, setConfirmedEvents] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  const [registered, setRegistered] = useState(false);
  const [page, setPage] = useState(1);

  // Product design competiton can have 3-5 members make a state no of members and for each member state for name, email and registration Number send it to form Rendering

  const Payment = ((e) => {
    e.preventDefault()
    // call payment gateway

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('regNo', regNo);
    data.append('contact', contact);
    data.append('batch', batch);
    data.append('confirmedEvents', confirmedEvents);
    data.append('totalAmount', totalAmount);
    data.append('tranID', tranID);
    data.append('screenshot', screenshot);
    
    const regformData = {
      name,
      email,
      regNo,
      contact,
      batch,
      confirmedEvents,
      totalAmount,
      tranID,
    };


    fetch('https://script.google.com/macros/s/AKfycbwG5qJqwgiPDykZp5tvIIi5-r1ZvqU_1R0dWsSKj0alvKhTU-czdl4rZcCHoELadfA7xw/exec', {
      method: 'POST',
      body: data
    })
      .then(response => {
        console.log('Form data sent successfully');
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });

    submitForms(regformData);
  })

  useEffect(() => {
    // Calculate total amount whenever confirmedEvents changes
    let total = 0;
    confirmedEvents.forEach(event => {
      total += eventFees[event];
    });
    setTotalAmount(total);
  }, [confirmedEvents, eventFees]);

  return (
    <div className='esummit-registration'>
      <img className='logo' src={Logo} alt='e-cell vit bhopal' />
      <div className='form-container'>
        <h2 className='heading'>{heading}</h2>
      
        <form className='registration-form'>
          {/* Render the FormRenderer component */}
          <FormRendering
            setHeading={setHeading}
            page={page}
            setPage={setPage}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            regNo={regNo}
            setRegNo={setRegNo}
            contact={contact}
            setContact={setContact}
            batch={batch}
            setBatch={setBatch}
            tranID={tranID}
            settranID={settranID}
            screenshot={screenshot}
            setScreenShot={setScreenShot}
            selectedEvents={selectedEvents}
            setSelectedEvents={setSelectedEvents}
            confirmedEvents={confirmedEvents}
            setConfirmedEvents={setConfirmedEvents}
            eventFees={eventFees}
            totalAmount={totalAmount}
            Payment={Payment}
            registered={registered}
            setRegistered={setRegistered}
          />
        </form>
      </div>
    </div>
  );
}

export default Registration;
