// src/App.jsx

import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar 導覽列 */}
      <nav style={navStyle}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <a href="#about" className="link-hover-effect" style={linkStyle}>About</a>
          <a href="#organizations" className="link-hover-effect" style={linkStyle}>Other Organizations</a>
          <a href="#projects" className="link-hover-effect" style={linkStyle}>Big Projects</a>
        </div>
      </nav>

      {/* 頁面內容切換區 */}
      <div style={{ flex: 1 }}>
        {/* 每個區塊都有對應 id */}
        <section id="about">
          <Home />
        </section>
        
        <section id="organizations">
          <Organizations />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
      </div>

      {/* 全域元件 */}
      <Footer />
      <TopButton />
    </div>
  );
}

// Navbar 的 CSS in JS 樣式
const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 5%',
  backgroundColor: 'var(--bg-beige)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderBottom: '2px dashed var(--accent-pink)'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--text-main)',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer' // 確保滑鼠游標是手指形狀
};