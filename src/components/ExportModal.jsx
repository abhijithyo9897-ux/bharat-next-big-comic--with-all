import React from 'react';

const ExportModal = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--panel-bg)',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>Professional Export</h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}>Print / PDF Generation</h4>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px' }}>
              <input type="radio" name="exportType" defaultChecked /> Standard PDF (Web Optimized)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px' }}>
              <input type="radio" name="exportType" /> Print Ready PDF (CMYK, 300 DPI)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <input type="radio" name="exportType" /> Storyboard Animatic Data (JSON + Images)
            </label>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}>Bleed & Trim Marks</h4>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px' }}>
              <input type="checkbox" defaultChecked /> Include Crop Marks
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <input type="checkbox" defaultChecked /> Include Bleed Area (0.125")
            </label>
          </div>

          <button 
            style={{ 
              width: '100%', 
              padding: '12px', 
              background: 'var(--primary)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              marginTop: '10px'
            }}
            onClick={() => {
              alert('Compiling High-Resolution PDF... (Mock)');
              onClose();
            }}
          >
            Export Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
