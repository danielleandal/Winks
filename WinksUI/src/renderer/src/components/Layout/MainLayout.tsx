import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import './MainLayout.css';
import AccountPage from '../pages/AccountPage';
import SettingsPage from '../pages/SettingsPage';
//import HomePage from '../pages/Homepage'; 

type Props = {
    onLogout: () => void;
  };

  export default function MainLayout({ onLogout }: Props) {
    const [page, setPage] = useState<'account' | 'settings'>('account');
  
    return (
      <div className="layout">
        <Navbar onSelect={setPage} onLogout={onLogout} />
        <div className="main-content">
          <Header />
          <div className="page-content">
            {page === 'account' && <AccountPage />}
            {page === 'settings' && <SettingsPage />}
          </div>
        </div>
      </div>
    );
  }