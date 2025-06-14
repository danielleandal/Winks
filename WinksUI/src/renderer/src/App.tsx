import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Homepage';
import CalibrationPage from './components/pages/callibrationPage'; // <-- make sure this exists
import MainLayout from './components/Layout/MainLayout';
import QuickLinks from './components/pages/QuickLinks';




function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calibration" element={<CalibrationPage />} />
        <Route path="/dashboard" element={<MainLayout onLogout={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/quick-links" element={<QuickLinks />} />     
      </Routes>
    </Router>
  );
}

export default App;