import React from 'react';

function IshaanSharma({ selectedEvents, page, event, setPage, setConfirmedEvents, eventCost }) {

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
        <h2>Speaker Session: Ishaan Sharma</h2>
        <p>Description: Add your event description here.</p>
        <p>Cost: ${eventCost}</p>
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

export default IshaanSharma;
