import React from 'react';

const RightInspector = ({ selectedElement, onChange, globalSettings, onGlobalSettingsChange }) => {
  if (!selectedElement) {
    return (
      <div style={{
        position: 'absolute',
        right: '20px',
        top: '50px',
        width: '280px',
        background: 'var(--panel-bg)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        zIndex: 100,
        color: 'var(--text)'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
          Canvas Settings
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Reading Flow</label>
          <select 
            value={globalSettings?.readingFlow || 'LTR'} 
            onChange={(e) => onGlobalSettingsChange({ ...globalSettings, readingFlow: e.target.value })}
            style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
          >
            <option value="LTR">Western (Left to Right)</option>
            <option value="RTL">Manga (Right to Left)</option>
            <option value="Vertical">Webtoon (Vertical Scroll)</option>
          </select>
        </div>

        <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: 'var(--accent)' }}>
          Print Guidelines
        </h3>
        <div style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
            <input 
              type="checkbox" 
              checked={globalSettings?.showBleed ?? true}
              onChange={(e) => onGlobalSettingsChange({ ...globalSettings, showBleed: e.target.checked })}
            /> 
            Show Print Bleed (0.125")
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
            <input 
              type="checkbox" 
              checked={globalSettings?.showSafe ?? true}
              onChange={(e) => onGlobalSettingsChange({ ...globalSettings, showSafe: e.target.checked })}
            /> 
            Show Safe Area (0.25")
          </label>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'absolute',
      right: '20px',
      top: '50px',
      width: '280px',
      background: 'var(--panel-bg)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      zIndex: 100,
      color: 'var(--text)'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
        Properties
      </h3>
      
      {/* Universal Properties */}
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Position X</label>
        <input 
          type="number" 
          value={Math.round(selectedElement.x)} 
          onChange={(e) => onChange(selectedElement.id, { x: Number(e.target.value) })}
          style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Position Y</label>
        <input 
          type="number" 
          value={Math.round(selectedElement.y)} 
          onChange={(e) => onChange(selectedElement.id, { y: Number(e.target.value) })}
          style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      {/* Type Specific: Text for Balloons & SFX */}
      {(selectedElement.type === 'balloon' || selectedElement.type === 'sfx') && (
        <>
          <div style={{ marginBottom: '12px', marginTop: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Text Content</label>
            <textarea 
              value={selectedElement.text || ''} 
              onChange={(e) => onChange(selectedElement.id, { text: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px', minHeight: '60px' }}
            />
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Font Size (Scale)</label>
            <input 
              type="range" 
              min="10" 
              max="150"
              value={selectedElement.fontSize || (selectedElement.type === 'sfx' ? 60 : 14)} 
              onChange={(e) => onChange(selectedElement.id, { fontSize: Number(e.target.value) })}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Language & Script (M13)</label>
            <select 
              value={selectedElement.scriptLanguage || 'Devanagari'} 
              onChange={(e) => onChange(selectedElement.id, { scriptLanguage: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="Devanagari">Devanagari (Hindi/Sanskrit/Marathi)</option>
              <option value="Bengali">Bengali (বাংলা)</option>
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="Telugu">Telugu (తెలుగు)</option>
              <option value="Gujarati">Gujarati (ગુજરાતી)</option>
              <option value="Gurmukhi">Gurmukhi (ਪੰਜਾਬੀ)</option>
              <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
              <option value="Malayalam">Malayalam (മലയാളം)</option>
              <option value="Odia">Odia (ଓଡ଼ିଆ)</option>
              <option value="Latin">Latin / English Standard</option>
            </select>
          </div>
        </>
      )}

      {/* Type Specific: Fill Color for Panels */}
      {selectedElement.type === 'panel' && (
        <>
          <div style={{ marginBottom: '12px', marginTop: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Panel Background</label>
            <input 
              type="color" 
              value={selectedElement.fill || '#ffffff'} 
              onChange={(e) => onChange(selectedElement.id, { fill: e.target.value })}
              style={{ width: '100%', height: '32px', padding: '0', border: 'none', background: 'none' }}
            />
          </div>

          <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: 'var(--accent)' }}>
            Cinematic Shot Card
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Shot Size</label>
            <select 
              value={selectedElement.shotSize || 'Wide'} 
              onChange={(e) => onChange(selectedElement.id, { shotSize: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="Extreme Wide">Extreme Wide Shot (EWS)</option>
              <option value="Wide">Wide Shot (WS)</option>
              <option value="Full">Full Shot (FS)</option>
              <option value="Medium">Medium Shot (MS)</option>
              <option value="Close Up">Close Up (CU)</option>
              <option value="Extreme Close Up">Extreme Close Up (ECU)</option>
            </select>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Camera Angle</label>
            <select 
              value={selectedElement.cameraAngle || 'Eye Level'} 
              onChange={(e) => onChange(selectedElement.id, { cameraAngle: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="High Angle">High Angle</option>
              <option value="Eye Level">Eye Level</option>
              <option value="Low Angle">Low Angle</option>
              <option value="Dutch Angle">Dutch Angle (Dutch Tilt)</option>
              <option value="Bird's Eye">Bird's Eye View</option>
            </select>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Camera Movement</label>
            <select 
              value={selectedElement.cameraMovement || 'Static'} 
              onChange={(e) => onChange(selectedElement.id, { cameraMovement: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="Static">Static / Fixed</option>
              <option value="Pan">Pan (Left/Right)</option>
              <option value="Tilt">Tilt (Up/Down)</option>
              <option value="Dolly">Dolly / Push In / Pull Out</option>
              <option value="Zoom">Zoom</option>
              <option value="Tracking">Tracking / Follow</option>
              <option value="Handheld">Handheld / Shaky</option>
            </select>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Lens / Focal Length (M6)</label>
            <select 
              value={selectedElement.lensCategory || '35mm'} 
              onChange={(e) => onChange(selectedElement.id, { lensCategory: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="18mm">18mm Ultra-Wide (Fisheye Distortion)</option>
              <option value="24mm">24mm Wide Angle</option>
              <option value="35mm">35mm Cinematic Standard</option>
              <option value="50mm">50mm Natural Human Vision</option>
              <option value="85mm">85mm Portrait / Bokeh</option>
              <option value="200mm">200mm Super-Telephoto Compression</option>
            </select>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Composition Overlay (M6)</label>
            <select 
              value={selectedElement.compositionGrid || 'Rule of Thirds'} 
              onChange={(e) => onChange(selectedElement.id, { compositionGrid: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="Rule of Thirds">Rule of Thirds Grid</option>
              <option value="Golden Ratio">Golden Ratio / Spiral</option>
              <option value="Diagonal Method">Diagonal Dynamic Lines</option>
              <option value="1-Point Perspective">1-Point Perspective Grid</option>
              <option value="3-Point Perspective">3-Point Perspective Grid</option>
            </select>
          </div>

          <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: 'var(--accent)' }}>
            Z-Space & Depth (M5)
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Depth Layers (Comma separated)</label>
            <input 
              type="text" 
              placeholder="e.g. BG, Midground, FG"
              value={selectedElement.zLayers || 'Background, Foreground'} 
              onChange={(e) => onChange(selectedElement.id, { zLayers: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            />
          </div>

          <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: 'var(--accent)' }}>
            Blocking & Staging (M9)
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Actor Movement Path Vector (M9)</label>
            <select 
              value={selectedElement.movementPath || 'Straight Arc'} 
              onChange={(e) => onChange(selectedElement.id, { movementPath: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="Straight Arc">Straight Line Advance</option>
              <option value="Diagonal Pursuit">Diagonal Pursuit</option>
              <option value="Spiral Approach">Spiral Approach</option>
              <option value="Zigzag Evasion">Zigzag Evasion</option>
              <option value="Orbit Pursuit">Orbit Pursuit</option>
            </select>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>180° Axis Continuity Rule (M9)</label>
            <div style={{ padding: '6px 10px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#34d399', borderRadius: '4px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓</span> Eyeline Axis Locked (Left Camera Vector)
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Actor Blocking Notes</label>
            <textarea 
              placeholder="Describe character positions and motion paths..."
              value={selectedElement.blockingNotes || ''} 
              onChange={(e) => onChange(selectedElement.id, { blockingNotes: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px', minHeight: '50px' }}
            />
          </div>

          <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: 'var(--accent)' }}>
            Reading Flow & Page-Turn (M17)
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Page-Turn Pacing Intent</label>
            <select 
              value={selectedElement.pageTurnIntent || 'Standard Flow'} 
              onChange={(e) => onChange(selectedElement.id, { pageTurnIntent: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
            >
              <option value="Standard Flow">Standard Sequence Flow</option>
              <option value="Cliffhanger Reveal">Cliffhanger Reveal (Right-Hand Page Bottom)</option>
              <option value="Impact Splash">Full Impact Splash Accent</option>
              <option value="Progressive Speed">Progressive Acceleration</option>
            </select>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ padding: '6px 10px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', color: '#fcd34d', borderRadius: '4px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>👁️</span> Eye-Line Reading Path: Unambiguous Left-to-Right Vector
            </div>
          </div>

          {/* Module M16: Panel DNA Inspector (Implementation Plan v2.0 Section 6 M16 & Section 8) */}
          <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: '#60a5fa' }}>
            🧬 Panel DNA Inspector (M16)
          </h3>
          <div style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '10px', borderRadius: '6px', fontSize: '11px', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Panel ID:</span>
              <strong style={{ color: 'white' }}>P-{(selectedElement.id || '001').toString().substring(0, 8)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Geometry Family:</span>
              <strong style={{ color: '#60a5fa' }}>{selectedElement.boundaryFamily || 'rectangle'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Depth Plane:</span>
              <strong style={{ color: '#60a5fa' }}>{selectedElement.depthPlane || 'midground'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Camera Shot:</span>
              <strong style={{ color: '#60a5fa' }}>{selectedElement.shotSize || 'WS'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Reading Flow Order:</span>
              <strong style={{ color: '#60a5fa' }}>#{selectedElement.readingOrder || 1}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', paddingTop: '6px', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
              <span>Sync Mode:</span>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓ Manual & AI Synced</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightInspector;
