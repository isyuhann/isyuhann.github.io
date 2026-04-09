import { workExperienceData, challengesData, contactLinks } from "../portfolio";

// 引入 About 區塊的圖片
import heroBg from '../assets/media/about/hero_section.png';
import profilePic from '../assets/media/about/pic_bg.png';
import awsLogo from '../assets/media/about/aws_logo.png';
import nvidiaLogo from '../assets/media/about/nvidia_logo.png';
import ntpuLogo from '../assets/media/about/ntpu_logo.png';
import kmshLogo from '../assets/media/about/kmsh_logo.png';
import hotpotLogo from '../assets/media/about/hotpot.png';
import kinmenGovLogo from '../assets/media/about/kinmen_goverment_logo.png';
import linkedinLogo from '../assets/media/about/linkedin_logo.png';
import githubLogo from '../assets/media/about/github_logo.png';
import gmailLogo from '../assets/media/about/gmail_logo.png';
import blackLine from '../assets/media/black_line.png';

export default function Home() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ntpu_logo.png': return ntpuLogo;
      case 'kinmen_goverment_logo.png': return kinmenGovLogo;
      case 'hotpot.png': return hotpotLogo;
      default: return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* 區塊 1：Hero Section */}
      <section style={{ 
        height: '100vh', 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </section>

      {/* 區塊 2：Get to know me */}
      <section style={{ padding: '80px 10%' }}>
        {/* 上方標題列 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontFamily: 'Broadway', fontSize: '3.5rem', fontStyle: 'italic', fontWeight: 'bold' }}>Get to know me...</h1>
            <div style={{ fontFamily: 'RageItalic', fontSize: '2.5rem', color: 'var(--primary-yellow)', marginLeft: '100px', marginTop: '-10px' }}>YuHan Huang</div>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span className="pill-tag"># Proactive</span>
            <span className="pill-tag"># Driven</span>
            <span className="pill-tag"># Responsible</span>
          </div>
        </div>

        {/* 左照片右資訊 */}
        <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '60px' }}>
          {/* 左側照片 */}
          <div style={{ backgroundColor: 'var(--primary-yellow)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '480px', overflow: 'hidden' }}>
            <img src={profilePic} alt="YuHan" style={{ width: '90%', height: 'auto', display: 'block' }} />
          </div>

          {/* 右側資訊 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Skill */}
            <div>
              <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px' }}>Skill / Fields</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '15px', fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.1rem' }}>
                <span><span style={{ color: 'var(--primary-yellow)', fontFamily: 'MagicR', fontSize: '1.3rem' }}>#</span> Full-Stack</span>
                <span><span style={{ color: 'var(--primary-yellow)', fontFamily: 'MagicR', fontSize: '1.3rem' }}>#</span> Digital Marketing</span>
                <span><span style={{ color: 'var(--primary-yellow)', fontFamily: 'MagicR', fontSize: '1.3rem' }}>#</span> Administration</span>
                <span><span style={{ color: 'var(--primary-yellow)', fontFamily: 'MagicR', fontSize: '1.3rem' }}>#</span> Project Management</span>
                <span><span style={{ color: 'var(--primary-yellow)', fontFamily: 'MagicR', fontSize: '1.3rem' }}>#</span> Leadership</span>
              </div>
            </div>

            {/* Certification */}
            <div>
              <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px' }}>Certification</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={awsLogo} style={{ width: '50px' }} alt="AWS" />
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50%' }}></div>
                  <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700' }}>AWS Certified AI Practitioner</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={nvidiaLogo} style={{ width: '45px' }} alt="NVIDIA" />
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50%' }}></div>
                  <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700', lineHeight: '1.2' }}>Building LLM Applications<br/>With Prompt Engineering</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px' }}>Education</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={ntpuLogo} style={{ width: '40px' }} alt="NTPU" />
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50%' }}></div>
                  <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700' }}>2023 - Now</span>
                  <span style={{ fontFamily: 'GenseiRounded' }}>Department of Accounting @ National Taipei University</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={kmshLogo} style={{ width: '35px', marginLeft: '2.5px' }} alt="KMSH" />
                  <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50%', marginLeft: '2.5px' }}></div>
                  <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700' }}>2020 - 2023</span>
                  <span style={{ fontFamily: 'GenseiRounded' }}>General Education @ Kinmen Senior High School</span>
                </div>
              </div>
            </div>
            
            {/* 裝飾黑線 */}
            <div style={{ marginTop: '20px' }}>
              <img src={blackLine} alt="line" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 區塊 3：左右雙欄 (Work Exp & Achievements) */}
      <section style={{ padding: '40px 10%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        
        {/* 左欄：Work Experiences */}
        <div>
          <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '30px' }}>Work Experiences</h2>
          <div style={{ position: 'relative', borderLeft: '3px solid var(--primary-yellow)', marginLeft: '10px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {workExperienceData.map((work, idx) => (
              <div key={idx} style={{ position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '-10px', top: '10px', width: '16px', height: '16px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50%' }}></div>
                <img src={getIcon(work.icon)} alt="icon" style={{ position: 'absolute', left: '15px', top: '0px', width: '35px', height: '35px', objectFit: 'contain' }} />
                
                <div style={{ color: '#999', fontSize: '0.9rem', fontFamily: 'GenseiRounded' }}>{work.duration}</div>
                <h3 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.2rem', margin: '5px 0' }}>{work.title}</h3>
                <div style={{ color: '#666', fontSize: '0.95rem', fontFamily: 'GenseiRounded' }}>@ {work.org}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右欄：Challenges & Achievements + Get in Touch */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '30px' }}>Challenges & Achievements</h2>
            <div style={{ position: 'relative', borderLeft: '3px solid var(--primary-yellow)', marginLeft: '10px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {challengesData.map((chal, idx) => (
                <div key={idx} style={{ position: 'relative', paddingLeft: '30px' }}>
                  <div style={{ position: 'absolute', left: '-10px', top: '5px', width: '16px', height: '16px', backgroundColor: 'var(--primary-yellow)', borderRadius: '50%' }}></div>
                  <h3 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.15rem', marginBottom: '8px' }}>{chal.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: 'GenseiRounded' }}>{chal.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ fontFamily: 'GenseiRounded', fontWeight: '700', fontSize: '1.8rem', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '20px' }}>Get in Touch with Me!</h2>
            <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#0077b5' }}>
                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px' }} />
                <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700', borderBottom: '1px solid transparent', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.borderBottom='1px solid #0077b5'} onMouseOut={(e)=>e.target.style.borderBottom='1px solid transparent'}>黃雨涵 (YuHan)</span>
              </a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#333' }}>
                <img src={githubLogo} alt="GitHub" style={{ width: '30px' }} />
                <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700', borderBottom: '1px solid transparent', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.borderBottom='1px solid #333'} onMouseOut={(e)=>e.target.style.borderBottom='1px solid transparent'}>YuHan Huang</span>
              </a>
              <a href={contactLinks.gmail} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#ea4335' }}>
                <img src={gmailLogo} alt="Gmail" style={{ width: '30px' }} />
                <span style={{ fontFamily: 'GenseiRounded', fontWeight: '700', borderBottom: '1px solid transparent', transition: '0.2s' }} onMouseOver={(e)=>e.target.style.borderBottom='1px solid #ea4335'} onMouseOut={(e)=>e.target.style.borderBottom='1px solid transparent'}>isyuhann@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}