import React, { useState } from 'react';
import ComicCanvas from './components/ComicCanvas';
import BibleModal from './components/BibleModal';
import AICopilot from './components/AICopilot';
import ScriptEditor from './components/ScriptEditor';
import ExportModal from './components/ExportModal';
import { Taxonomy } from './data/taxonomy';

function App() {
  const [showBible, setShowBible] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [showScriptEditor, setShowScriptEditor] = useState(false);
  const [showExport, setShowExport] = useState(false);

  return (
    <div className="app-container">
      {showBible && <BibleModal onClose={() => setShowBible(false)} />}
      {showCopilot && <AICopilot onClose={() => setShowCopilot(false)} />}
      {showScriptEditor && <ScriptEditor onClose={() => setShowScriptEditor(false)} />}
      {showExport && <ExportModal onClose={() => setShowExport(false)} />}
      
      {/* Top Navigation Bar */}
      <header className="top-bar">
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>BHARAT NEXT BIG COMIC</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn" style={{ background: 'transparent', border: '1px solid #f59e0b', color: '#fcd34d' }} onClick={() => setShowScriptEditor(!showScriptEditor)}>
            📝 Script Editor
          </button>
          <button className="btn" style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }} onClick={() => setShowCopilot(!showCopilot)}>
            ✨ AI Copilot
          </button>
          <button className="btn" style={{ background: 'transparent', border: '1px solid var(--border)' }} onClick={() => setShowBible(true)}>
            📖 Project Bible
          </button>
          <button className="btn" onClick={() => setShowExport(true)}>Export</button>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="main-workspace">
        {/* Left Sidebar (Asset Taxonomy) */}
        <aside className="sidebar">
          <div className="panel-header">Asset Library</div>
          <div className="panel-content">
            <h3 style={{ marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Page Templates</h3>
            <ul style={{ listStyle: 'none', fontSize: '14px', marginBottom: '16px' }}>
              {[
                { id: 't1', name: '3-Panel Vertical', type: 'template', layout: '3-vertical' },
                { id: 't2', name: '4-Panel Grid', type: 'template', layout: '4-grid' },
                { id: 't3', name: 'Manga Splash', type: 'template', layout: 'splash' }
              ].map(template => (
                <li 
                  key={template.id} 
                  style={{ padding: '8px', borderBottom: '1px solid var(--border)', cursor: 'grab', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', marginBottom: '4px', borderRadius: '4px' }}
                  draggable="true"
                  onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'template', layout: template.layout }));
                  }}
                >
                  {template.name}
                </li>
              ))}
            </ul>

            <h3 style={{ marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Shot Sizes</h3>
            <ul style={{ listStyle: 'none', fontSize: '14px', marginBottom: '16px' }}>
              {Taxonomy.ShotSizes.slice(0, 5).map(shot => (
                <li 
                  key={shot.id} 
                  style={{ padding: '8px', borderBottom: '1px solid var(--border)', cursor: 'grab', background: 'rgba(255,255,255,0.05)', marginBottom: '4px', borderRadius: '4px' }}
                  draggable="true"
                  onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'panel', title: shot.name }));
                  }}
                >
                  <strong>{shot.id}</strong> - {shot.name}
                </li>
              ))}
            </ul>

            <h3 style={{ marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Balloons & Lettering</h3>
            <ul style={{ listStyle: 'none', fontSize: '14px', marginBottom: '16px' }}>
              {Taxonomy.Balloons.slice(0, 4).map(balloon => (
                <li 
                  key={balloon} 
                  style={{ padding: '8px', borderBottom: '1px solid var(--border)', cursor: 'grab', background: 'rgba(255,255,255,0.05)', marginBottom: '4px', borderRadius: '4px' }}
                  draggable="true"
                  onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'balloon', text: `${balloon} Text` }));
                  }}
                >
                  {balloon} Balloon
                </li>
              ))}
            </ul>

            <h3 style={{ marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>SFX & Impact</h3>
            <ul style={{ listStyle: 'none', fontSize: '14px', marginBottom: '16px' }}>
              {["BOOM", "WHAM", "CRASH", "SWISH"].map(sfx => (
                <li 
                  key={sfx} 
                  style={{ padding: '8px', borderBottom: '1px solid var(--border)', cursor: 'grab', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '4px', borderRadius: '4px' }}
                  draggable="true"
                  onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'sfx', text: sfx }));
                  }}
                >
                  {sfx}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Central Canvas */}
        <section className="canvas-area">
          <ComicCanvas />
        </section>

        {/* Right Inspector Panel */}
        <aside className="inspector">
          <div className="panel-header">Properties</div>
          <div className="panel-content">
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Select an object to inspect properties.</p>
          </div>
        </aside>
      </main>

      {/* Pages Tray */}
      <footer style={{
        height: '100px',
        background: 'var(--panel-bg)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: '12px',
        overflowX: 'auto'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '12px', color: 'var(--text-secondary)', marginRight: '8px' }}>PAGES</div>
        {[1, 2, 3].map(page => (
          <div 
            key={page}
            style={{ 
              width: '60px', 
              height: '80px', 
              background: page === 1 ? 'white' : 'rgba(255,255,255,0.05)', 
              border: page === 1 ? '2px solid var(--primary)' : '1px solid var(--border)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: page === 1 ? 'black' : 'var(--text-secondary)',
              fontSize: '12px',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {page}
          </div>
        ))}
        <div style={{ 
            width: '60px', 
            height: '80px', 
            border: '1px dashed var(--border)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            fontSize: '24px',
            cursor: 'pointer',
            flexShrink: 0
        }}>
          +
        </div>
      </footer>
    </div>
  );
}

export default App;
