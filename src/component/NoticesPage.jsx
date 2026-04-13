import React from "react";

const notices = [
  {
    pinned: true,
    type: "WORKSHOP",
    title: "Chip Making Workshop",
    date: "April 12, 2026",
    desc: "Hands-on workshop on semiconductor fabrication basics, clean-room workflow, and chip design prototyping for EL/EO students. Limited seats available for the first batch.",
    link: "Registration form and session details available"
  },
  {
    pinned: true,
    type: "RESULTS",
    title: "S1 Toppers of EL",
    date: "April 12, 2026",
    desc: "Meet the toppers for the first semester of the 2025 EL batch. Celebrating academic excellence and dedication in the program.",
    link: null
  }
];

export default function NoticesPage() {
  return (
    <div className="notices-page" style={{padding: '3rem 0', minHeight: '60vh'}}>
      <h1 style={{color: '#eaf6ff', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem'}}>All Notices</h1>
      <div style={{color: '#b6d6f6', fontSize: '1.2rem', marginBottom: '2rem'}}>Stay updated with important announcements</div>
      {notices.map((notice, idx) => (
        <div key={idx} style={{
          display: 'flex',
          background: 'linear-gradient(90deg, #19202a 60%, #1a2331 100%)',
          borderRadius: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.15)',
          overflow: 'hidden',
          alignItems: 'stretch'
        }}>
          <div style={{
            background: 'rgba(30,40,60,0.7)',
            padding: '2.2rem 2.2rem 2.2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: 140,
            justifyContent: 'space-between',
            gap: '1.2rem'
          }}>
            {notice.pinned && <span style={{background:'#e07a8c', color:'#fff', borderRadius:'1em', fontWeight:600, fontSize:'1em', padding:'0.2em 1em', marginBottom:6, letterSpacing:1}}>PINNED</span>}
            <span style={{background:'#2a3b4d', color:'#7fc0ff', borderRadius:'1em', fontWeight:600, fontSize:'1em', padding:'0.2em 1em', letterSpacing:1}}>{notice.type}</span>
            <span style={{color:'#22334a', fontSize:'3.2rem', fontWeight:700, opacity:0.18, alignSelf:'flex-end', lineHeight:1}}>{(idx+1).toString().padStart(2,'0')}</span>
          </div>
          <div style={{flex:1, padding:'2.2rem 2.2rem 2.2rem 1.5rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div style={{color:'#7fc0ff', fontWeight:600, fontSize:'1.05em', marginBottom:4}}>{notice.date}</div>
            <div style={{fontWeight:800, fontSize:'2.5rem', color:'#f3f6fa', marginBottom:8}}>{notice.title}</div>
            <div style={{color:'#b6d6f6', fontSize:'1.2rem', marginBottom:12}}>{notice.desc}</div>
            {notice.link && <div style={{marginTop:8}}><a href="#" style={{color:'#2bbcff', fontWeight:600, fontSize:'1.1em', textDecoration:'underline'}}>{notice.link}</a></div>}
          </div>
          <div style={{display:'flex', alignItems:'center', paddingRight:'2.2rem'}}>
            <span style={{color:'#7fc0ff', fontSize:'2.2rem', fontWeight:700, opacity:0.7}}>&#8250;</span>
          </div>
        </div>
      ))}
    </div>
  );
}
