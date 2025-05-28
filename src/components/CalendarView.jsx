import React from "react";
import '../styles/AppointmentCalendar.css';


const calendarData = {
  Mon: ["10:00", "11:00", "12:00"],
  Tues: ["08:00", "09:00", "10:00"],
  Wed: ["12:00", "—", "13:00"],
  Thurs: ["10:00", "11:00", "—"],
  Fri: ["—", "14:00", "16:00"],
  Sat: ["12:00", "14:00", "15:00"],
  Sun: ["09:00", "10:00", "11:00"]
};

const AppointmentCalendar = () => {
  const days = Object.keys(calendarData);
  const times = [0, 1, 2]; // index positions for time rows

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button>{"<"}</button>
        <h2>October 2021</h2>
        <button>{">"}</button>
      </div>

      <div className="calendar-grid">
        {days.map((day, i) => (
          <div key={i} className={`day-column ${day === "Tues" ? "active-day" : ""}`}>
            <div className="day-label">
              <div className="day-name">{day}</div>
              <div className="day-number">{25 + i}</div>
            </div>
            {calendarData[day].map((time, j) => (
              <div
                key={j}
                className={`time-slot ${
                  day === "Tues" && time === "09:00" ? "highlight-slot" :
                  day === "Thurs" && time === "11:00" ? "subtle-slot" :
                  day === "Sun" && time === "09:00" ? "subtle-slot" : ""
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment dentist">
          <strong>Dentist</strong>
          <div>09:00–11:00</div>
          <div>Dr. Cameron Williamson 🦷</div>
        </div>
        <div className="appointment physio">
          <strong>Physiotherapy Appointment</strong>
          <div>11:00–12:00</div>
          <div>Dr. Kevin Djones 💪</div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
