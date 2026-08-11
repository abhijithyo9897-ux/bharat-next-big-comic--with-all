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

          <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '8px', color: 'var(--accent)' }}>
            Z-Space & Depth
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
            Blocking & Staging
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Actor Blocking Notes</label>
            <textarea 
              placeholder="Describe character positions and motion paths..."
              value={selectedElement.blockingNotes || ''} 
              onChange={(e) => onChange(selectedElement.id, { blockingNotes: e.target.value })}
              style={{ width: '100%', padding: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px', minHeight: '60px' }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RightInspector;
