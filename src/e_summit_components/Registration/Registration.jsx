import React, { useState, useEffect } from 'react';
import Logo from '../../images/ecell-logo-dark.png';
import './registration.css';
import FormRendering from './FormRendering';
import submitForms from './submitForms';

function Registration() {
  const eventFees = {
    "Event 1": 50,
    "Speaker Session: Ishaan Sharma": 150,
    "Event 3": 70,
    "Event 4": 80,
    "Event 5": 90,
    "Event 6": 100,
    "Event 7": 110,
    "Event 8": 120,
    "Event 9": 130,
  };

  const [heading, setHeading] = useState('Registration Form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [contact, setContact] = useState('');
  const [batch, setBatch] = useState('');
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [confirmedEvents, setConfirmedEvents] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  const [registered, setRegistered] = useState(false);
  const [page, setPage] = useState(1);

  const Payment = ((e) => {
    e.preventDefault()
    // call payment gateway
    const tranID = '123'
    
    const formData = {
      name,
      email,
      regNo,
      contact,
      batch,
      confirmedEvents,
      totalAmount,
      tranID
    };
    console.log('Ok')
    // Call submitForms and pass the formData
    submitForms(formData);
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
