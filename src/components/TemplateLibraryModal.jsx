import React, { useState } from 'react';

/**
 * Module M18: Style & Genre Template Library (Implementation Plan v2.0 Section 6 M18)
 * One-click genre starting points (Shōnen Manga, American Superhero, Gekiga Noir, Webtoon Vertical).
 */
const TemplateLibraryModal = ({ onClose }) => {
  const [selectedGenre, setSelectedGenre] = useState('Shōnen Action');

  const templates = [
    { id: 'shonen', name: 'Shōnen Action', desc: 'Dynamic diagonal grids, heavy motion speed-lines, scream balloons.', color: '#ef4444' },
    { id: 'superhero', name: 'American Superhero', desc: '6-tier hero grids, bold primaries, heavy black ink borders.', color: '#3b82f6' },
    { id: 'gekiga', name: 'Gekiga Noir', desc: 'High-contrast monochrome, dense cross-hatching, desaturated LUTs.', color: '#6b7280' },
    { id: 'webtoon', name: 'Webtoon Vertical', desc: 'Continuous vertical scroll flow, wide atmospheric gaps.', color: '#10b981' },
    { id: 'franco', name: 'European Album', desc: 'Clean line (Ligne Claire), 4-tier grid, watercolor ink wash.', color: '#f59e0b' }
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
        border: '1px solid #10b981',
        borderRadius: '12px',
        width: '620px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399' }}>
            <span>📚</span> Genre & Style Template Library (M18)
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        {/* Template List */}
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {templates.map(tpl => (
            <div 
              key={tpl.id}
              onClick={() => setSelectedGenre(tpl.name)}
              style={{
                padding: '14px',
                borderRadius: '8px',
                background: selectedGenre === tpl.name ? 'rgba(255,255,255,0.08)' : 'var(--bg)',
                border: selectedGenre === tpl.name ? `2px solid ${tpl.color}` : '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: tpl.color }}>{tpl.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{tpl.desc}</div>
              </div>
              {selectedGenre === tpl.name && (
                <span style={{ background: tpl.color, color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>
                  ACTIVE
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)', background: 'var(--bg)', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border)', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
          <button 
            onClick={() => { alert(`Applied ${selectedGenre} Preset to Project!`); onClose(); }}
            style={{ padding: '8px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Apply Template
          </button>
        </div>

      </div>
    </div>
  );
};

export default TemplateLibraryModal;
