import React from "react";
import "../styles/Anatomysection.css";
import humanImage from '../assets/images/human_image.jpeg';


const bodyStatus = [
  { title: "Lungs", icon: "🫁", date: "26 Okt 2021", level: 20, color: "#d74f4f" },
  { title: "Teeth", icon: "🦷", date: "26 Okt 2021", level: 70, color: "#58c5b4" },
  { title: "Bone", icon: "🦴", date: "26 Okt 2021", level: 45, color: "#f2893b" }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <span className="this-week">This Week ⌄</span>
      </div>

      <div className="dashboard-content">
        <div className="body-section">
          <img
  src={humanImage}
  alt="Human Body"
  className="body-image"
/>
          <div className="label heart">❤️ Healthy Heart</div>
          <div className="label leg">🦵 Healthy Leg</div>
        </div>

        <div className="status-section">
          {bodyStatus.map((item, index) => (
            <div className="status-card" key={index}>
              <div className="status-header">
                <span className="icon">{item.icon}</span>
                <span className="title">{item.title}</span>
              </div>
              <div className="date">Date: {item.date}</div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${item.level}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
          <div className="details-link">Details →</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
