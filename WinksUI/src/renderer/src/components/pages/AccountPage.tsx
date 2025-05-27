export default function AccountPage() {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 'bold' }}>Account</h1>
        <p style={{ marginTop: '24px' }}>Don’t have an account?<br />That’s fine.</p>
        <p style={{ maxWidth: '400px', margin: '16px auto' }}>
          If you would like to create one, you can save your settings and use them on other devices as well.
        </p>
        <div style={{ marginTop: '24px' }}>
          <button style={btnStyle}>Signup</button>
          <button style={{ ...btnStyle, marginLeft: '16px' }}>Login</button>
        </div>
      </div>
    );
  }
  
  const btnStyle = {
    backgroundColor: '#4FC3F7',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };