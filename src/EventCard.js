import React from "react";

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src="/image/crop.png" alt="Event" />
      </div>
      <div className="event-details">
        <h2>Movie night</h2>
        <p className="hosted">🎉 Hosted by Elysia</p>
        <div className="responses">
          <span>14 responses</span> · <a href="#">see guests</a>
        </div>
        <button className="invite-button">Invite</button>
        <div className="event-info">
          <p>📅 18 August 6:00PM - 19 August 1:00PM UTC +10</p>
          <p>📍 301 Rowes Lane, WA, 7183</p>
          <p>
            🔗 <a href="https://netflix.com">netflix.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
