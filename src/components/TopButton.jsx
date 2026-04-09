// src/components/TopButton.jsx
import { useState, useEffect } from 'react';

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 監聽滾動高度，超過 300px 才加上 'show' 的 class
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="backToTopBtn"
      // 如果 isVisible 是 true 就加上 show 這個 class 讓它彈出來
      className={isVisible ? "show" : ""} 
      onClick={scrollToTop}
      title="Back to Top"
    >
      {/* 這是你原本專案裡完美比例的 SVG 箭頭 */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"></path>
        <path d="M5 12l7-7 7 7"></path>
      </svg>
    </button>
  );
}