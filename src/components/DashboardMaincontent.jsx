import AnatomySection from '../components/Anatomysection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityChart';
import '../styles/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      <section className="top-section">
        <AnatomySection />
        <CalendarView />
      </section>

      <section className="bottom-section">
        <ActivityFeed />
        <UpcomingSchedule />
      </section>
    </div>
  );
}

export default DashboardMainContent;
