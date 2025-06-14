// QuickLinks.tsx
import { useNavigate } from 'react-router-dom';
import './QuickLinks.css';
import googleIcon from '../../images/google.png';
import youtubeIcon from '../../images/youtube.png'
import mainIcon from '../../images/main.png'

const apps = [
  { name: 'Google', icon: googleIcon, url: 'https://www.google.com' },
  { name: 'YouTube', icon: youtubeIcon, url: 'https://www.youtube.com' },
  { name: 'Gmail', icon: mainIcon, url: 'https://mail.google.com' },
];

export default function QuickLinks() {
  const navigate = useNavigate();

  return (
    <div className="quick-links-container">
      <h2>Quicklinks</h2>

      <div className="tiles-grid">
        {apps.map((app, index) => (
          <a href={app.url} className="tile" key={index} target="_blank" rel="noopener noreferrer">
            <img src={app.icon} alt={app.name} className="tile-icon" />
            <span className="tile-label">{app.name}</span>
          </a>
        ))}
      </div>

      <button className="home-button" onClick={() => navigate('/dashboard')}>
        Back to Home
      </button>
    </div>
  );
}