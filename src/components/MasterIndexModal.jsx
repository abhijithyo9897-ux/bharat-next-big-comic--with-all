import React, { useState } from 'react';

/**
 * Section 2: Master Index & Directory (Cmd+K)
 * Single searchable, tag-filterable navigation hub surfacing every tool, brush,
 * panel shape, balloon type, SFX, template, character, background, and preset as drag-drop ready thumbnail cards.
 */
const MasterIndexModal = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Tools', 'Brushes', 'Panel Shapes', 'Balloons', 'SFX', 'Templates', 'Indic Typography', 'LUTs', 'Environments'];

  const masterCatalog = [
    { name: 'Freehand Inking Brush (M24)', category: 'Brushes', tag: 'Ink', desc: 'Stylus pressure-sensitive adaptive ink brush.' },
    { name: 'Marker & Paint Splash (M24)', category: 'Brushes', tag: 'Paint', desc: 'Adaptive splash brush for background effects.' },
    { name: 'Reference Image Attachment (M25)', category: 'Tools', tag: 'Import', desc: 'Drop-in tracing image layer with reference-only toggle.' },
    { name: 'Shattered Jagged Panel (M3)', category: 'Panel Shapes', tag: 'Geometry', desc: 'Impact action panel border with shattered edges.' },
    { name: 'Shout Burst Balloon (M10)', category: 'Balloons', tag: 'Dialogue', desc: 'High-volume emotional scream dialogue bubble.' },
    { name: 'Devanagari / Indic Typography (M13)', category: 'Indic Typography', tag: 'Script', desc: 'Hindi/Bengali/Tamil/Telugu native font & leading.' },
    { name: 'Cinematic Teal & Orange LUT (M12)', category: 'LUTs', tag: 'Grade', desc: 'Blockbuster color grading preset filter.' },
    { name: 'Japanese Shōnen Action Template (M18)', category: 'Templates', tag: 'Genre', desc: 'Diagonal impact grids & speed-line screentones.' },
    { name: '3D Cut-Paper Parallax Stage (M5)', category: 'Tools', tag: 'Depth', desc: 'Multi-plane Z-axis profile composer.' },
    { name: '180° Eyeline Axis Rule Lock (M9)', category: 'Tools', tag: 'Continuity', desc: 'Camera vector continuity line indicator.' },
    { name: 'Screenplay Script-to-Comic (M15)', category: 'Tools', tag: 'AI', desc: 'Parse script headings into proposal shot lists.' },
    { name: 'Print CMYK 300 DPI Export (M20)', category: 'Tools', tag: 'Export', desc: 'High-res PDF export with crop and bleed marks.' }
  ];

  const filteredCatalog = masterCatalog.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || item.category === selectedTag || item.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2600
    }}>
      <div style={{
        background: 'var(--panel-bg)',
        border: '1px solid #38bdf8',
        borderRadius: '12px',
        width: '800px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 70px rgba(0,0,0,0.95)',
        overflow: 'hidden'
      }}>
        {/* Search Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8' }}>
              <span>🔍</span> Master Index & Directory (Command Palette)
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
          </div>

          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 25 modules, tools, brushes, panel shapes, templates, and Indic typography (e.g., 'Dutch angle', 'shout balloon', 'Devanagari')..."
            style={{
              width: '100%',
              padding: '10px 14px',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              color: 'white',
              fontSize: '13px',
              outline: 'none'
            }}
          />
        </div>

        {/* Tag Filters */}
        <div style={{ padding: '10px 20px', borderBottom: '1px solid var(--border)', display: 'flex', gap: '6px', overflowX: 'auto', background: 'rgba(0,0,0,0.2)' }}>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                whiteSpace: 'nowrap',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                cursor: 'pointer',
                background: selectedTag === tag ? '#38bdf8' : 'rgba(255,255,255,0.05)',
                color: selectedTag === tag ? 'black' : 'var(--text-secondary)',
                fontWeight: selectedTag === tag ? 'bold' : 'normal',
                border: selectedTag === tag ? '1px solid #38bdf8' : '1px solid var(--border)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {filteredCatalog.map(item => (
            <div
              key={item.name}
              draggable="true"
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'index_item', name: item.name, category: item.category }));
              }}
              style={{
                padding: '12px',
                borderRadius: '8px',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                cursor: 'grab',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '13px', color: 'white' }}>{item.name}</strong>
                <span style={{ fontSize: '9px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 6px', borderRadius: '10px' }}>{item.tag}</span>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
              <div style={{ fontSize: '9px', color: 'gray', marginTop: '4px' }}>[ Drag to Canvas ]</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', background: 'var(--bg)', fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
          <span>Showing <strong>{filteredCatalog.length}</strong> index entries</span>
          <span>Tip: Press <strong>Ctrl+K</strong> anywhere to open Master Index</span>
        </div>

      </div>
    </div>
  );
};

export default MasterIndexModal;
