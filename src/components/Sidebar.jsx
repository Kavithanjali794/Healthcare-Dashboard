import {
  LayoutDashboard,
  Clock,
  Calendar,
  Stethoscope,
  BarChart2,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings
} from 'lucide-react';

function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        paddingTop: "40px",
        paddingLeft: "50px",
        background: "#F6FAFF",
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        borderTopLeftRadius: "65px",
        borderBottomLeftRadius: "85px",
        marginLeft: "10px",
        position: "relative"
      }}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div style={{ marginBottom: "30px", fontSize: "22px", fontWeight: "bold" }}>
          <span style={{ color: "#39BDC8" }}>Health</span>
          <span style={{ color: "navy" }}>care</span>
          <span style={{ color: "#39BDC8" }}>.</span>
        </div>

        {/* General Section */}
        <h2 style={{ fontSize: "12px", fontWeight: 700, color: "#444", marginBottom: "15px" }}>GENERAL</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <LayoutDashboard size={18} color="#003366" />
            <span style={{ fontSize: "16px", color: "#003366", fontWeight: 600 }}>Dashboard</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <Clock size={18} color="#B2BEB5" />
            <span style={{ fontSize: "15px", color: "#BABEC3", fontWeight: 600 }}>History</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <Calendar size={18} color="#B2BEB5" />
            <span style={{ fontSize: "15px", color: "#BABEC3", fontWeight: 600 }}>Calendar</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <Stethoscope size={18} color="#B2BEB5" />
            <span style={{ fontSize: "14px", color: "#BABEC3", fontWeight: 600 }}>Appointments</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <BarChart2 size={18} color="#B2BEB5" />
            <span style={{ fontSize: "14px", color: "#BABEC3", fontWeight: 600 }}>Statistics</span>
          </div>
        </div>

        {/* Tools Section */}
        <h2 style={{ fontSize: "12px", fontWeight: 700, color: "#444", margin: "20px 0 15px" }}>TOOLS</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <FlaskConical size={18} color="#B2BEB5" />
            <span style={{ fontSize: "14px", color: "#BABEC3", fontWeight: 600 }}>Tests</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <MessageCircle size={18} color="#B2BEB5" />
            <span style={{ fontSize: "14px", color: "#BABEC3", fontWeight: 600 }}>Chat</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
            <LifeBuoy size={18} color="#B2BEB5" />
            <span style={{ fontSize: "14px", color: "#BABEC3", fontWeight: 600 }}>Support</span>
          </div>
        </div>
      </div>

      {/* Settings Link at Bottom */}
      <div style={{ marginTop: "140px", display: "flex", alignItems: "center", gap: "10px", padding: "8px 0" }}>
        <Settings size={18} color="#B2BEB5" />
        <span style={{ fontSize: "14px", color: "#bdbebf" }}>Settings</span>
      </div>
    </aside>
  );
}

export default Sidebar;
