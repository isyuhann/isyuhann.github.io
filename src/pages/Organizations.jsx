// src/pages/Organizations.jsx
import { organizationsData } from "../portfolio";

export default function Organizations() {
  return (
    <div style={{ padding: '60px 10%', background: 'var(--bg-beige)', minHeight: '100vh' }}>
      {/* 雜誌風格大標題 */}
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 className="magazine-title" style={{ fontSize: '4rem' }}>Other Organizations</h1>
        <p className="signature-text" style={{ fontSize: '1.5rem', marginTop: '10px' }}>Community & Leadership Journey</p>
      </div>

      {/* 拼貼容器 */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '40px',
        alignItems: 'start'
      }}>
        {organizationsData.map((item) => (
          <div key={item.id} style={{
            background: item.color,
            padding: '30px',
            borderRadius: '2px',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.1)',
            border: '2px solid #333',
            transform: `rotate(${item.rotation})`,
            transition: 'transform 0.3s ease',
            position: 'relative',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${item.rotation})`}
          >
            {/* 標題與時間 */}
            <div style={{ marginBottom: '15px' }}>
              <span style={{ 
                fontFamily: 'MagicR', 
                background: 'var(--primary-yellow)', 
                padding: '2px 10px', 
                color: '#fff',
                fontSize: '0.9rem'
              }}>
                {item.duration}
              </span>
              <h3 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.6rem', marginTop: '10px' }}>
                {item.role}
              </h3>
              <h4 style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>@ {item.org}</h4>
            </div>

            {/* 照片預留空間 (拼貼風：有時候照片在文字上方，有時候在下方) */}
            <div style={{ 
              width: '100%', 
              height: '180px', 
              border: '2px dashed #999', 
              margin: '15px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.5)',
              color: '#999',
              fontStyle: 'italic'
            }}>
              [ Image Placeholder - Coming Soon ]
            </div>

            {/* 描述列表 */}
            <ul style={{ 
              paddingLeft: '18px', 
              fontSize: '0.95rem', 
              lineHeight: '1.7', 
              color: 'var(--text-main)',
              listStyleType: 'square'
            }}>
              {item.description.map((desc, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{desc}</li>
              ))}
            </ul>

            {/* 底部 Tags */}
            <div style={{ 
              marginTop: '20px', 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px' 
            }}>
              {item.tags.map((tag, index) => (
                <span key={index} style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold',
                  background: 'rgba(255,255,255,0.7)',
                  padding: '2px 8px',
                  border: '1px solid #333',
                  borderRadius: '3px'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}