import { assets } from '../../assets/assets.ts';

function Header(): React.JSX.Element {
  return (
    <header
      style={{
        height: '64px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        boxSizing: 'border-box',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
      }}
    >
      <img src={assets.logo} alt="Winks Logo" style={{ height: '40px' }} />
      <img
        src={assets.profileIcon}
        alt="Profile Icon"
        style={{
          height: '45px',
          width: '45px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </header>
  );
}

export default Header;