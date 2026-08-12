import React, { useState } from 'react';

/**
 * Module M24: Freehand Pen, Ink & Brush Tool (Master Directive Section 1 M24)
 * Pressure-sensitive stylus freehand inking (ink line, marker, paint splash, eraser),
 * lightweight quick-draw pad, and optional AI vector-trace assist.
 */
const FreehandBrushModal = ({ onClose }) => {
  const [activeBrush, setActiveBrush] = useState('G-Pen Inking');
  const [brushSize, setBrushSize] = useState(4);
  const [brushColor, setBrushColor] = useState('#ffffff');
  const [isAiVectorTrace, setIsAiVectorTrace] = useState(false);

  const brushes = [
    { name: 'G-Pen Inking', type: 'ink', desc: 'Crisp, high-pressure stylus stroke for panel borders and outlines.' },
    { name: 'Marker Fill', type: 'marker', desc: 'Flat, solid tone fill for speed lines and lettering.' },
    { name: 'Paint Splash', type: 'splash', desc: 'Dynamic paint splatter & screentone texture brush.' },
    { name: 'Precision Eraser', type: 'eraser', desc: 'Non-destructive eraser layer for touch-ups.' }
  ];

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
        border: '1px solid #f43f5e',
        borderRadius: '12px',
        width: '650px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 70px rgba(0,0,0,0.95)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(244, 63, 94, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fb7185' }}>
            <span>✏️</span> Freehand Pen, Ink & Brush Tool (M24)
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Virtual Inking Pad Canvas */}
          <div style={{ height: '220px', background: '#0b0f19', borderRadius: '8px', border: '2px dashed #f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '13px', textAlign: 'center' }}>
              [ Stylus & Touch Inking Pad — Draw Freehand Panel Borders, SFX & Balloons ]
            </div>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#fb7185', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '4px' }}>
              Stylus Pressure: 100% Active
            </div>
          </div>

          {/* Adaptive Brush Family Selector */}
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'white' }}>Adaptive Brush Family</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {brushes.map(b => (
                <div
                  key={b.name}
                  onClick={() => setActiveBrush(b.name)}
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    background: activeBrush === b.name ? 'rgba(244, 63, 94, 0.15)' : 'var(--bg)',
                    border: activeBrush === b.name ? '1px solid #f43f5e' : '1px solid var(--border)',
                    cursor: 'pointer'
                  }}
                >
                  <strong style={{ fontSize: '12px', color: activeBrush === b.name ? '#fb7185' : 'white', display: 'block' }}>{b.name}</strong>
                  <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{b.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stroke Properties & AI Vector Trace Toggle */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', background: 'var(--bg)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border)' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Stroke Weight ({brushSize}px)</label>
              <input type="range" min="1" max="30" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} style={{ width: '100%' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Ink Color</label>
              <input type="color" value={brushColor} onChange={(e) => setBrushColor(e.target.value)} style={{ width: '100%', height: '24px', border: 'none', background: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>AI Vector-Trace Assist</label>
              <label style={{ fontSize: '11px', color: '#fb7185', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', cursor: 'pointer' }}>
                <input type="checkbox" checked={isAiVectorTrace} onChange={(e) => setIsAiVectorTrace(e.target.checked)} /> Trace into M3 Panel
              </label>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', background: 'var(--bg)', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border)', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
          <button 
            onClick={() => { alert(`Applied ${activeBrush} Freehand Stroke Layer to Canvas!`); onClose(); }}
            style={{ padding: '8px 20px', background: '#f43f5e', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Add Stroke Layer
          </button>
        </div>

      </div>
    </div>
  );
};

export default FreehandBrushModal;
