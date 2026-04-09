import { bigProjectsData } from "../portfolio";

export default function Projects() {
  // 動態引入專案素材的 helper function
  const getMediaUrl = (filename) => new URL(`../assets/media/projects/${filename}`, import.meta.url).href;

  return (
    <div style={{ padding: '60px 8%', background: '#fff', minHeight: '100vh' }}>
      
      {/* 頂部標題與按鈕 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontFamily: 'Broadway', fontSize: '3.5rem', fontStyle: 'italic' }}>My Big <span style={{ color: 'var(--primary-yellow)' }}>Projects</span></h1>
        <a 
          href="https://github.com/isyuhann?tab=repositories" 
          target="_blank" 
          rel="noreferrer"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'GenseiRounded',
            fontWeight: '700',
            padding: '12px 25px',
            borderRadius: '30px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '4px 4px 0px var(--primary-yellow)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          View All Projects <span>→</span>
        </a>
      </div>

      {/* 雙欄卡片網格 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {bigProjectsData.map((project, index) => (
          <div key={index} style={{
            backgroundColor: '#f6f6f6',
            borderRadius: '25px',
            padding: '35px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            
            {/* 標題與 Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', justifyContent: 'center' }}>
              {project.logo && <img src={getMediaUrl(project.logo)} alt="logo" style={{ height: '40px' }} />}
              
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="link-hover-effect">
                  <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem' }}>
                    {project.title}
                  </h2>
                </a>
              ) : (
                <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem' }}>{project.title}</h2>
              )}
            </div>

            <div style={{ width: '80%', height: '2px', backgroundColor: '#000', margin: '0 auto 25px' }}></div>

            {/* 媒體區塊 (固定白色底框) */}
            <div style={{ 
              backgroundColor: '#fff', 
              height: '260px', /* 對應你設計的 9.2cm 高度比例 */
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '25px',
              overflow: 'hidden'
            }}>
              {project.mediaType === 'video' ? (
                <video 
                  src={getMediaUrl(project.media)} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  style={{ height: '100%', width: 'auto', objectFit: 'contain' }} 
                />
              ) : (
                <img src={getMediaUrl(project.media)} alt={project.title} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
              )}
            </div>

            {/* Tags 標籤 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '25px' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ 
                  backgroundColor: 'var(--primary-yellow)', 
                  color: '#000', 
                  fontFamily: 'GenseiRounded', 
                  fontWeight: '700', 
                  padding: '8px 20px', 
                  borderRadius: '20px',
                  fontSize: '0.95rem'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 說明列表 */}
            <ul style={{ paddingLeft: '25px', color: '#333', fontFamily: 'GenseiRounded', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
              {project.description.map((desc, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}