import lungsIcon from '../assets/lungs-icon.png';
import teethIcon from '../assets/teeth-icon.png';
import boneIcon from '../assets/bone-icon.png';

const metrics = [
  {
    label: 'Lungs',
    icon: lungsIcon,
    progress: 40,
    color: '#FF4D4F' // Red
  },
  {
    label: 'Teeth',
    icon: teethIcon,
    progress: 65,
    color: '#FFA500' // Orange
  },
  {
    label: 'Bone',
    icon: boneIcon,
    progress: 85,
    color: '#52C41A' // Green
  }
];

export default function AnatomyInfoCards() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '24px',
      padding: '20px',
      borderRadius: '16px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)'
    }}>
      {metrics.map((item) => (
        <div key={item.label} style={{ width: '100px', textAlign: 'center' }}>
          <img
            src={item.icon}
            alt={item.label}
            style={{ width: '40px', height: '40px', marginBottom: '8px' }}
          />
          <div style={{
            fontWeight: '600',
            color: '#003366',
            marginBottom: '6px',
            fontSize: '14px'
          }}>
            {item.label}
          </div>
          <div style={{
            height: '8px',
            width: '100%',
            backgroundColor: '#E0E0E0',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${item.progress}%`,
              height: '100%',
              backgroundColor: item.color,
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}
