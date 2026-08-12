import React, { useState } from 'react';

/**
 * Module M5: Depth, Layers & 3D Cut-Paper Composer (Implementation Plan v2.0 Section 6 M5)
 * Side-on "Stage View" visualizer for Z-depth planes and 2.5D parallax orchestration.
 */
const StageView3D = ({ onClose, currentPanel }) => {
  const [depthMode, setDepthMode] = useState('2.5D Parallax');
  const [activePlane, setActivePlane] = useState('Midground');

  const planes = [
    { name: 'Deep Background', zOffset: -300, color: '#1e293b' },
    { name: 'Background', zOffset: -150, color: '#334155' },
    { name: 'Midground', zOffset: 0, color: '#3b82f6' },
    { name: 'Character Stage', zOffset: 100, color: '#8b5cf6' },
    { name: 'Foreground', zOffset: 200, color: '#ec4899' },
    { name: 'Extreme Foreground', zOffset: 350, color: '#f43f5e' }
  ];

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
        border: '1px solid var(--accent)',
        borderRadius: '12px',
        width: '650px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#c084fc' }}>
            <span>🎭</span> 3D Cut-Paper & Parallax Stage Composer (M5)
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Mode Selector */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div>
              <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block' }}>Depth Rendering Mode</label>
              <strong style={{ color: 'white', fontSize: '14px' }}>{depthMode}</strong>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Flat 2D', '2.5D Parallax', 'Full 3D Stage'].map(mode => (
                <button 
                  key={mode}
                  onClick={() => setDepthMode(mode)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: depthMode === mode ? '1px solid var(--primary)' : '1px solid var(--border)',
                    background: depthMode === mode ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Side-On Profile Stage View */}
          <div>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', color: 'var(--accent)' }}>Side-On Stage Profile View (Z-Axis Depth Plane Stack)</h4>
            <div style={{ height: '220px', background: '#090d16', borderRadius: '8px', border: '1px solid var(--border)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 20px', overflowX: 'auto' }}>
              
              {/* Virtual Camera Indicator */}
              <div style={{ position: 'absolute', left: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#f59e0b' }}>
                <span style={{ fontSize: '24px' }}>🎥</span>
                <span style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '2px' }}>CAMERA</span>
              </div>

              {/* Z-Planes Visualizer */}
              {planes.map((plane) => (
                <div 
                  key={plane.name}
                  onClick={() => setActivePlane(plane.name)}
                  style={{
                    width: '60px',
                    height: plane.name === activePlane ? '180px' : '140px',
                    background: plane.name === activePlane ? plane.color : 'rgba(255,255,255,0.05)',
                    border: plane.name === activePlane ? `2px solid ${plane.color}` : '1px dashed var(--border)',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: plane.name === activePlane ? `0 0 20px ${plane.color}` : 'none'
                  }}
                >
                  <div style={{ fontSize: '10px', color: plane.name === activePlane ? 'white' : 'var(--text-secondary)', textAlign: 'center', fontWeight: 'bold' }}>
                    {plane.name}
                  </div>
                  <div style={{ fontSize: '9px', color: plane.name === activePlane ? 'rgba(255,255,255,0.8)' : 'gray', marginTop: '8px' }}>
                    Z: {plane.zOffset}px
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Plane Controls */}
          <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'white' }}>
              Plane Controls: <span style={{ color: '#c084fc' }}>{activePlane}</span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Parallax Shift Multiplier</label>
                <input type="range" min="0" max="200" defaultValue="100" style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Atmospheric Fog / Blur</label>
                <select style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                  <option>None (Crisp)</option>
                  <option>Light Haze</option>
                  <option>Heavy Depth Blur (Bokeh)</option>
                  <option>Silhouette Occlusion</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StageView3D;
