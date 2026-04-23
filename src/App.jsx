// src/App.jsx

import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

// 💡 已經把 react-router-dom 跟 ScrollToTop 刪除了！

export default function App() {
  // 1. 開場動畫的狀態
  const [loading, setLoading] = useState(true);
  // 2. 導覽列是否顯示的狀態（預設隱藏）
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // 處理開場動畫的計時器
    const timer = setTimeout(() => { setLoading(false); }, 2000);

    // 處理捲動監聽：超過 300px 才讓導覽列出現
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    // 啟動監聽器
    window.addEventListener('scroll', handleScroll);

    // 元件卸載時清除計時器與監聽器（好習慣）
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 渲染開場動畫
  if (loading) return <SplashScreen />;

  // 動畫結束，渲染單頁長網頁
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 💡 隱藏式導覽列：透過 showNavbar 狀態控制位移與透明度 */}
      <nav style={{
        ...navStyle,
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
        opacity: showNavbar ? 1 : 0,
        pointerEvents: showNavbar ? 'auto' : 'none'
      }}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <a href="#about" className="link-hover-effect" style={linkStyle}>About</a>
          <a href="#organizations" className="link-hover-effect" style={linkStyle}>Other Organizations</a>
          <a href="#projects" className="link-hover-effect" style={linkStyle}>Big Projects</a>
        </div>
      </nav>

      {/* 💡 單頁內容區：把三個頁面當作 section 疊加在一起 */}
      <div style={{ flex: 1 }}>
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

// Navbar 的動態樣式 (改為 fixed 懸浮，並加上微透明背景與動畫)
const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 5%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)', // 95% 不透明度的白色，帶出高級感
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1001,
  borderBottom: '2px dashed var(--accent-pink)',
  transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s ease' // 滑順的進場動畫
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--text-main)',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer'
};