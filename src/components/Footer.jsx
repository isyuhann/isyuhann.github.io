// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '30px 20px',
      backgroundColor: 'var(--bg-beige)',
      color: 'var(--text-main)',
      marginTop: '50px',
      borderTop: '2px dashed var(--accent-pink)',
      fontSize: '0.9rem'
    }}>
      <p>YuHan Huang © {new Date().getFullYear()}</p>
      <p style={{ marginTop: '5px', fontSize: '0.8rem', color: '#888' }}>
        isyuhann@gmail.com
      </p>
    </footer>
  );
}