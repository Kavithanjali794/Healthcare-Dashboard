export default function TopBar() {
  return (
    <div className="top-bar">
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="notification-btn">🔔</button>
      <div className="user-profile">
        <img src="/avatar.png" alt="User Avatar" className="avatar" />
        <span className="username">Kavitha</span>
      </div>
    </div>
  );
}
