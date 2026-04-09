import { Player } from '@lottiefiles/react-lottie-player';
import splashAnimation from './assets/lottie/splashAnimation.json';

export default function SplashScreen() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#171c28', 
      zIndex: 9999
    }}>
      {/* 使用官方的 Player 元件 */}
      <Player
        autoplay
        loop
        src={splashAnimation}
        style={{ height: '400px', width: '400px' }}
      />
    </div>
  );
}