import React from 'react';

function EventPage1({ selectedEvents, page, event, setPage, setConfirmedEvents }) {

  const handleConfirm = (e) => {
    e.preventDefault();
    setConfirmedEvents(prevConfirmedEvents => [...prevConfirmedEvents, event]);
    setPage(page + 1); 
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setConfirmedEvents(prevConfirmedEvents => prevConfirmedEvents.filter(e => e !== event));
    setPage(2); 
  };

  return (
    selectedEvents.includes(event) ? (
      <div>
        <h2>{event}</h2>
        <p>Description: Add your event description here.</p>
        <div>
          <button onClick={(e)=>handleConfirm(e)}>Confirm</button>
          <button onClick={(e)=>handleCancel(e)}>Cancel</button>
        </div>
      </div>
    ) : (
      setPage(page + 1)
    )
  );
}

export default EventPage1;
