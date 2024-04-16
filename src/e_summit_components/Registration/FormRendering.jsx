import React from 'react';
import BasicInfo from './BasicInfo';
import EventSelection from './EventSelection';
import EventPage1 from './EventPage1';
import IshaanSharma from './IshaanSharma';

function FormRenderer({
  setHeading,
  page,
  setPage,
  name,
  setName,
  email,
  setEmail,
  regNo,
  setRegNo,
  contact,
  setContact,
  batch,
  setBatch,
  selectedEvents,
  setSelectedEvents,
  confirmedEvents,
  setConfirmedEvents,
  eventFees,
  totalAmount,
  Payment,
  registered,
  setRegistered
}) {
  return (
    <>
      {page === 1 && (
        <BasicInfo
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
          page={page}
          setPage={setPage}
        />
      )}

      {page === 2 && (
        <EventSelection
          setHeading={setHeading}
          selectedEvents={selectedEvents}
          setSelectedEvents={setSelectedEvents}
          page={page}
          setPage={setPage}
          eventFees={eventFees}
        />
      )}

      {page === 3 && (
        <EventPage1
          event="Event 1"
          selectedEvents={selectedEvents}
          page={page}
          setPage={setPage}
          setConfirmedEvents={setConfirmedEvents}
        />
      )}

      {page === 4 && (
        <IshaanSharma
          event="Speaker Session: Ishaan Sharma"
          selectedEvents={selectedEvents}
          page={page}
          setPage={setPage}
          setConfirmedEvents={setConfirmedEvents}
          eventCost={eventFees["Speaker Session: Ishaan Sharma"]}
        />
      )}

      {page >= 5 && page <= 11 && (
        <EventPage1
          event={`Event ₹{page - 2}`}
          selectedEvents={selectedEvents}
          page={page}
          setPage={setPage}
          setConfirmedEvents={setConfirmedEvents}
        />
      )}

      {page === 12 && (
        <div>
          <p>Thank You</p>
          <p>Total Amount: ₹{totalAmount}</p>
          {registered?
          <p>You have registered successfully.</p>:
          <div>
            <button onClick={(e) => {Payment(e); setRegistered(true)}}>Proceed to Pay</button>
            <button onClick={() => {setPage(2); setConfirmedEvents([]);}}>Cancel</button>
          </div>}
        </div>
      )}
    </>
  );
}

export default FormRenderer;
