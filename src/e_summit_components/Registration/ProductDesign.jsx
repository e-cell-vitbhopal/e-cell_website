import React from 'react';

function ProductDesign({ selectedEvents, page, event, setPage, setConfirmedEvents, eventCost }) {

  const handleConfirm = (e) => {
    e.preventDefault();
    setConfirmedEvents(prevConfirmedEvents => [...prevConfirmedEvents, event]);
    setPage(page + 1); 
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setConfirmedEvents([]);
    setPage(2); 
  };

  return (
    selectedEvents.includes(event) ? (
      <div>
        <h2>Product Design Competition</h2>
        <br />
        <p>
        Engage in the ultimate showcase of creativity and innovation with our Product Design
        Competition! This exciting event challenges teams to tackle real-world problems
        by designing innovative solutions within a limited timeframe. From ideation to
        presentation, participants will navigate multiple rounds, including concept
        development, prototyping, and refinement, culminating in a thrilling pitching
        round where they present their finalized designs to judges and peers.
        </p>

        <p>What You'll Gain:</p>

        <p>Networking
          Opportunities: Connect
          with like-minded individuals, industry experts, and potential mentors. Expand
          your network and gain valuable contacts within the finance sector.</p>
        
        <p>Research
            and development opportunities: you can
            research the problems near you and solve them giving you a chance to dive into
            product development and marketing and see what real time challenges are faced
            by startups and enterprises every day. </p>
        
        <p>Event Date: 7 May 2024</p>
        <p>Event Venue: Classroom(TBD)</p>
        <p>Team Strength – 3-5 Members</p>
        <p>Participation Fees per person: Rs. 50 /-</p>
        <p>Award for Competition: TBD</p>
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

export default ProductDesign;
