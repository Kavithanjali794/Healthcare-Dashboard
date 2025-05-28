import React from "react";
import "../styles/UpcomingStyle.css";

const appointments = {
  Thursday: [
    { title: "Health checkup complete", time: "11:00 AM", emoji: "💉" },
    { title: "Ophthalmologist", time: "14:00 PM", emoji: "👁️" }
  ],
  Saturday: [
    { title: "Cardiologist", time: "12:00 AM", emoji: "❤️" },
    { title: "Neurologist", time: "16:00 PM", emoji: "🧑‍⚕️" }
  ]
};

const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      {Object.entries(appointments).map(([day, events]) => (
        <div key={day} className="schedule-day">
          <h3 className="day-title">On {day}</h3>
          <div className="schedule-events">
            {events.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-title">
                  {event.title} <span>{event.emoji}</span>
                </div>
                <div className="event-time">{event.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
