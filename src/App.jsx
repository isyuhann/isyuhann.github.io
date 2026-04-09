import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import TopButton from './components/TopButton';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Navbar 導覽列 */}
        <nav style={navStyle}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <Link to="/" style={linkStyle}>About</Link>
            <Link to="/organizations" style={linkStyle}>Other Organizations</Link>
            <Link to="/projects" style={linkStyle}>Big Projects</Link>
          </div>
        </nav>

        {/* 頁面內容切換區：移除了 Competitions 路由 */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        {/* 全域元件 */}
        <Footer />
        <TopButton />
      </div>
    </Router>
  );
}

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
  transition: 'color 0.2s',
};