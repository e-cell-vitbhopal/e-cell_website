import React from 'react';

function EventSelection({ setHeading, selectedEvents, setSelectedEvents, eventFees, setPage, page }) {
  setHeading('Events');
  
  const handleEventChange = (eventName) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter(event => event !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  // Calculate total fee based on selected events
  const calculateTotalFee = () => {
    let totalFee = 0;
    selectedEvents.forEach(event => {
      totalFee += eventFees[event];
    });
    return totalFee;
  };

  // Function to determine if an event is selected
  const isEventSelected = (eventName) => {
    return selectedEvents.includes(eventName);
  };

  return (
    <div className='events'>
      {/* Day 1 Events */}
      <div className='events-container'>
        <div className="events-section">

          
        </div>

        {/* Day 2 Events */}
        <div className="events-section">
          <div className={isEventSelected("Fire Side Chat") ? "selected-event" : "event"} onClick={() => handleEventChange("Fire Side Chat")}>
            <span>Parichay (₹75)</span>
          </div>
          </div>
        </div>
      </div>
  
       {/* Total Fee */}
      <div>Maximum Fee: ₹{calculateTotalFee()}</div>
  
      {/* Navigation Buttons */}
      <div className='btn-container'>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    ;
  }

export default EventSelection;
