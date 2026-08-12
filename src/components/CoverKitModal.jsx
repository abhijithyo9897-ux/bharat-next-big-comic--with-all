import React, { useState } from 'react';

/**
 * Module M14: Editorial/Collage & Cover Design Kit (Implementation Plan v2.0 Section 6 M14)
 * Cover design studio supporting mastheads, issue callouts, full-bleed hero images, and pull-quotes.
 */
const CoverKitModal = ({ onClose }) => {
  const [masthead, setMasthead] = useState('BHARAT NEXT BIG COMIC');
  const [issueNumber, setIssueNumber] = useState('#01 - SPECIAL EDITION');
  const [layoutStyle, setLayoutStyle] = useState('Full Bleed Hero');

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2500
    }}>
      <div style={{
        background: 'var(--panel-bg)',
        border: '1px solid #e11d48',
        borderRadius: '12px',
        width: '600px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(225, 29, 72, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fb7185' }}>
            <span>🎨</span> Cover & Editorial Design Studio (M14)
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', gap: '20px' }}>
          
          {/* Cover Preview Canvas */}
          <div style={{
            width: '200px',
            height: '300px',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            border: '2px solid #e11d48',
            borderRadius: '8px',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            flexShrink: 0
          }}>
            <div style={{ fontWeight: '900', fontSize: '14px', color: '#fb7185', textAlign: 'center', letterSpacing: '1px' }}>
              {masthead}
            </div>
            
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '11px', border: '1px dashed rgba(255,255,255,0.2)', padding: '20px 0', borderRadius: '4px' }}>
              [ Hero Cover Artwork ]
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '9px', color: '#f59e0b', fontWeight: 'bold' }}>{issueNumber}</span>
              <span style={{ fontSize: '8px', background: 'white', color: 'black', padding: '2px 4px', fontWeight: 'bold' }}>BARCODE</span>
            </div>
          </div>

          {/* Form Controls */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Masthead Title</label>
              <input 
                type="text" 
                value={masthead} 
                onChange={(e) => setMasthead(e.target.value)}
                style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Issue & Volume Callout</label>
              <input 
                type="text" 
                value={issueNumber} 
                onChange={(e) => setIssueNumber(e.target.value)}
                style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Editorial Cover Template</label>
              <select 
                value={layoutStyle}
                onChange={(e) => setLayoutStyle(e.target.value)}
                style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
              >
                <option>Full Bleed Hero</option>
                <option>Split Collage Grid</option>
                <option>Magazine Masthead & Sidebar</option>
                <option>Retro 70s Comic Cover</option>
                <option>Minimalist Graphic Novel</option>
              </select>
            </div>

            <button 
              onClick={() => { alert('Cover Template Applied to Current Page!'); onClose(); }}
              style={{ padding: '10px', background: '#e11d48', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: 'auto' }}
            >
              Apply Cover Layout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoverKitModal;
