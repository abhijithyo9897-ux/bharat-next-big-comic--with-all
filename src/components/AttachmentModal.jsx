import React, { useState } from 'react';

/**
 * Module M25: Attachments & Reference Import (Master Directive Section 1 M25)
 * Import gallery photos, camera shots, clipboard images, or reference sheets
 * onto depth planes with a "reference-only" (non-printing tracing overlay) toggle.
 */
const AttachmentModal = ({ onClose }) => {
  const [importSource, setImportSource] = useState('File Gallery');
  const [isReferenceOnly, setIsReferenceOnly] = useState(true);
  const [targetPlane, setTargetPlane] = useState('Background Plane');

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2500
    }}>
      <div style={{
        background: 'var(--panel-bg)',
        border: '1px solid #0ea5e9',
        borderRadius: '12px',
        width: '600px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 70px rgba(0,0,0,0.95)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(14, 165, 233, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8' }}>
            <span>📎</span> Attachments & Reference Import (M25)
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Dropzone */}
          <div style={{ height: '160px', background: '#090d16', borderRadius: '8px', border: '2px dashed #0ea5e9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <span style={{ fontSize: '32px', marginBottom: '8px' }}>📁</span>
            <div style={{ color: 'white', fontSize: '13px', fontWeight: 'bold' }}>Drag & Drop Image File Here</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '11px', marginTop: '4px' }}>Supports PNG, JPEG, WebP, SVG reference sheets</div>
          </div>

          {/* Import Source Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Import Source</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {['File Gallery', 'Camera Snapshot', 'Clipboard Paste'].map(src => (
                <button
                  key={src}
                  onClick={() => setImportSource(src)}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    background: importSource === src ? 'rgba(14, 165, 233, 0.2)' : 'var(--bg)',
                    border: importSource === src ? '1px solid #0ea5e9' : '1px solid var(--border)',
                    color: importSource === src ? '#38bdf8' : 'white',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  {src}
                </button>
              ))}
            </div>
          </div>

          {/* Depth Plane & Tracing Settings */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'var(--bg)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border)' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Target Depth Plane (M5)</label>
              <select value={targetPlane} onChange={(e) => setTargetPlane(e.target.value)} style={{ width: '100%', padding: '6px', background: 'var(--panel-bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                <option>Deep Background</option>
                <option>Background Plane</option>
                <option>Midground Plane</option>
                <option>Foreground Plane</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Tracing Overlay Mode</label>
              <label style={{ fontSize: '11px', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', cursor: 'pointer' }}>
                <input type="checkbox" checked={isReferenceOnly} onChange={(e) => setIsReferenceOnly(e.target.checked)} /> Reference-Only (Non-Printing)
              </label>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', background: 'var(--bg)', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border)', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
          <button 
            onClick={() => { alert(`Imported Reference Layer onto ${targetPlane}!`); onClose(); }}
            style={{ padding: '8px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Import Attachment
          </button>
        </div>

      </div>
    </div>
  );
};

export default AttachmentModal;
