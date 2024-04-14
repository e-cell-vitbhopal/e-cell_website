import React from 'react';

function EventSelection({ setHeading, selectedEvents, setSelectedEvents, eventFees, setPage, page }) {
  setHeading('Events')
  
  const handleEventChange = (event) => {
    const eventName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedEvents([...selectedEvents, eventName]);
    } else {
      setSelectedEvents(selectedEvents.filter((event) => event !== eventName));
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

  return (
    <div className='events'>
      {/* Day 1 Events */}
      <div className='events-container'>
        <div className="events-section">
          <h3>Day 1 Events</h3>
          <div>
            <input
              type="checkbox"
              id="event1"
              name="Event 1"
              checked={selectedEvents.includes("Event 1")}
              onChange={handleEventChange}
            />
            <label htmlFor="event1">Event 1 ($50)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event2"
              name="Speaker Session: Ishaan Sharma"
              checked={selectedEvents.includes("Speaker Session: Ishaan Sharma")}
              onChange={handleEventChange}
            />
            <label htmlFor="event2">Speaker Session: Ishaan Sharma (₹150)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event3"
              name="Event 3"
              checked={selectedEvents.includes("Event 3")}
              onChange={handleEventChange}
            />
            <label htmlFor="event3">Event 3 ($70)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event4"
              name="Event 4"
              checked={selectedEvents.includes("Event 4")}
              onChange={handleEventChange}
            />
            <label htmlFor="event4">Event 4 ($80)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event5"
              name="Event 5"
              checked={selectedEvents.includes("Event 5")}
              onChange={handleEventChange}
            />
            <label htmlFor="event5">Event 5 ($90)</label>
          </div>
        </div>

        {/* Day 2 Events */}
        <div className="events-section">
          <h3>Day 2 Events</h3>
          <div>
            <input
              type="checkbox"
              id="event6"
              name="Event 6"
              checked={selectedEvents.includes("Event 6")}
              onChange={handleEventChange}
            />
            <label htmlFor="event6">Event 6 ($100)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event7"
              name="Event 7"
              checked={selectedEvents.includes("Event 7")}
              onChange={handleEventChange}
            />
            <label htmlFor="event7">Event 7 ($110)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event8"
              name="Event 8"
              checked={selectedEvents.includes("Event 8")}
              onChange={handleEventChange}
            />
            <label htmlFor="event8">Event 8 ($120)</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="event9"
              name="Event 9"
              checked={selectedEvents.includes("Event 9")}
              onChange={handleEventChange}
            />
            <label htmlFor="event9">Event 9 ($130)</label>
          </div>
        </div>
      </div>

      {/* Total Fee */}
      <div>Total Fee: ${calculateTotalFee()}</div>

      {/* Navigation Buttons */}
      <div className='btn-container'>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default EventSelection;
