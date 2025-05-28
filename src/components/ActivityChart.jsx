import React from 'react';
import '../styles/ActivityChart.css';

const activityData = {
  Mon: [96, 64, 80],
  Tues: [112, 80, 48],
  Wed: [80, 40, 56],
  Thurs: [96, 64, 80],
  Fri: [112, 96, 48],
  Sat: [80, 56, 40],
  Sun: [96, 80, 64],
};

const barColors = ['#E1E5EA', 'cyan', 'indigo'];

const ActivityChart = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2>Activity</h2>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-chart">
        {Object.entries(activityData).map(([day, heights], idx) => (
          <div className="day-group" key={idx}>
            <div className="bars">
              {heights.map((height, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{
                    height: `${height}px`,
                    backgroundColor: barColors[index],
                  }}
                ></div>
              ))}
            </div>
            <div className="day-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
