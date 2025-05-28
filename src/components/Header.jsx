import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <span className="notification-icon">🔔</span>
        </div>
      </div>

      <div className="header-right">
        <button className="add-btn">+</button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/40" alt="User" />
          <span className="username">Dr. Kavitha</span>
        </div>
      </div>
    </header>
  );
}
