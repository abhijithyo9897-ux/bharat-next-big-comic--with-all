import React, { useState } from 'react';

const ScriptEditor = ({ onClose }) => {
  const [script, setScript] = useState('EXT. ABANDONED WAREHOUSE - NIGHT\n\nRain lashes against the rusted corrugated steel. \n\nLUMIA (20s) stands in the doorway, her cyberpunk trench coat dripping. She draws her blaster.\n\nLUMIA\n(whispering)\nI know you are in there.');
  const [parsedShots, setParsedShots] = useState([]);

  const handleParse = () => {
    // Mock parsing logic
    setParsedShots([
      { id: 's1', type: 'panel', title: 'Wide Shot', text: 'EXT. WAREHOUSE - NIGHT' },
      { id: 's2', type: 'panel', title: 'Medium Shot', text: 'Lumia stands in doorway' },
      { id: 's3', type: 'panel', title: 'Close Up', text: 'Lumia draws blaster' },
      { id: 's4', type: 'balloon', text: 'I know you are in there.' }
    ]);
  };

  return (
    <div style={{
      position: 'absolute',
      left: '20px',
      top: '60px',
      width: '400px',
      bottom: '20px',
      background: 'var(--panel-bg)',
      border: '1px solid var(--accent)',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
      zIndex: 150,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', color: '#fcd34d' }}>
          <span>📝</span> Script-to-Comic Studio
        </div>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '18px' }}>×</button>
      </div>

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Screenplay Text</h4>
        <textarea 
          value={script}
          onChange={(e) => setScript(e.target.value)}
          style={{ 
            width: '100%', 
            flex: '0 0 150px',
            padding: '12px', 
            background: 'var(--bg)', 
            border: '1px solid var(--border)', 
            color: 'white', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            marginBottom: '12px',
            resize: 'none'
          }}
        />
        
        <button 
          onClick={handleParse}
          style={{ 
            width: '100%', 
            padding: '10px', 
            background: 'var(--primary)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer', 
            fontWeight: 'bold',
            marginBottom: '16px'
          }}
        >
          Parse & Generate Shot List
        </button>

        {parsedShots.length > 0 && (
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}>Proposed AI Shot List</h4>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Drag these proposed panels and balloons directly onto the canvas.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {parsedShots.map(shot => (
                <li 
                  key={shot.id}
                  draggable="true"
                  onDragStart={(e) => {
                    const payload = shot.type === 'panel' 
                      ? { type: 'panel', title: shot.title } 
                      : { type: 'balloon', text: shot.text };
                    e.dataTransfer.setData('text/plain', JSON.stringify(payload));
                  }}
                  style={{ 
                    padding: '12px', 
                    background: shot.type === 'panel' ? 'rgba(255,255,255,0.05)' : 'rgba(59, 130, 246, 0.1)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '8px',
                    cursor: 'grab'
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '12px', color: shot.type === 'panel' ? 'var(--text)' : '#60a5fa', marginBottom: '4px' }}>
                    [{shot.type.toUpperCase()}] {shot.title || 'Dialogue'}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    "{shot.text}"
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScriptEditor;
