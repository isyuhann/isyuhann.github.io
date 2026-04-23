// src/components/ScrollToTop.jsx
// 20260423：現階段是一頁式網站，所以不需要該檔案提供的元件了
// 若未來有意改回多分頁式，可再加回來（刪除檔名開頭「_」、調整 App.jsx 路由設定）

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}