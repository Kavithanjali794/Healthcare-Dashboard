import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMaincontent';
import AnatomySection from './components/Anatomysection';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <DashboardMainContent />

      </div>
    </div>
  );
}
