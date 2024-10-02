import React, { useEffect } from 'react';

function EventSelection({ setHeading, selectedEvents, setSelectedEvents, eventFees, setPage, page }) {
  
  // Set heading only once when the component mounts
  useEffect(() => {
    setHeading('Events');
  }, [setHeading]);

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
      totalFee += eventFees[event] || 0;  // Ensure fee is valid
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
          <h3>Parichay Events</h3>
          <div className={isEventSelected("Speaker Session: Ishaan Sharma") ? "selected-event" : "event"} onClick={() => handleEventChange("Speaker Session: Ishaan Sharma")}>
            <span>Speaker Session (₹150)</span>
          </div>
          <div className={isEventSelected("Product Design Competition") ? "selected-event" : "event"} onClick={() => handleEventChange("Product Design Competition")}>
            <span>Product --- (₹250)</span>
          </div>
          <div className={isEventSelected("IPL Auction") ? "selected-event" : "event"} onClick={() => handleEventChange("IPL Auction")}>
            <span>--- (₹250)</span>
          </div>
          <div className={isEventSelected("Silent Disco") ? "selected-event" : "event"} onClick={() => handleEventChange("Silent Disco")}>
            <span>----- (₹200)</span>
          </div>
        </div>

        {/* Day 2 Events (commented out) */}
        {/* <div className="events-section">
          <h3>Day 2 Events</h3>
          <div className={isEventSelected("Paper Trading Competition") ? "selected-event" : "event"} onClick={() => handleEventChange("Paper Trading Competition")}>
            <span>Paper Trading Competition (₹150)</span>
          </div>
          <div className={isEventSelected("Fire Side Chat") ? "selected-event" : "event"} onClick={() => handleEventChange("Fire Side Chat")}>
            <span>Speaker session: Dr. Vijender Singh Chauhan (₹75)</span>
          </div>
          <div className={isEventSelected("Case Study Competition") ? "selected-event" : "event"} onClick={() => handleEventChange("Case Study Competition")}>
            <span>Case Study Competition (₹200)</span>
          </div>
        </div>
        */}
      </div>

      {/* Total Fee */}
      <div>Maximum Fee: ₹{calculateTotalFee()}</div>

      {/* Navigation Buttons */}
      <div className='btn-container'>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default EventSelection;
