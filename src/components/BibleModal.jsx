import React, { useState } from 'react';

const BibleModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('characters');

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        width: '80%',
        height: '80%',
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
          background: 'var(--panel-bg)'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>Project Reference Bible</h2>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar */}
          <div style={{ width: '200px', borderRight: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)', padding: '16px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['characters', 'world', 'materials', 'ai_integration', 'continuity'].map(tab => (
                <li 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 16px',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    marginBottom: '8px',
                    background: activeTab === tab ? 'var(--primary)' : 'transparent',
                    textTransform: 'capitalize'
                  }}
                >
                  {tab === 'materials' ? 'Visual Materials' : tab === 'ai_integration' ? 'AI Settings' : tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
            {activeTab === 'characters' && (
              <div>
                <h3 style={{ marginTop: 0 }}>Character Library</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Define character identities, core attributes, and pose sheets.</p>
                <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
                    <div>
                      <div style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        [ Character Image / Reference ]
                      </div>
                    </div>
                    <div>
                      <input type="text" placeholder="Character Name" style={{ width: '100%', padding: '8px', marginBottom: '12px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }} />
                      <textarea placeholder="Identity & Backstory..." style={{ width: '100%', height: '80px', padding: '8px', marginBottom: '12px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }} />
                      <input type="text" placeholder="Key Expressions (e.g., Stoic, Angry, Smirk)" style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }} />
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <button className="btn" style={{ background: 'rgba(255,255,255,0.1)' }}>+ Add Pose</button>
                    <button className="btn" style={{ background: 'rgba(255,255,255,0.1)' }}>+ Add Expression</button>
                    <button className="btn" style={{ background: 'rgba(255,255,255,0.1)' }}>+ Add Prop Assignment</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'world' && (
              <div>
                <h3 style={{ marginTop: 0 }}>World & Set Reference</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Track environments, locations, and art-department props.</p>
                <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '16px' }}>
                  <h4>Locations</h4>
                  <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px' }}>
                    {[1, 2, 3].map(i => (
                      <div key={i} style={{ minWidth: '150px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ height: '80px', background: 'rgba(255,255,255,0.05)', marginBottom: '8px', borderRadius: '4px' }}></div>
                        <div style={{ fontSize: '12px', textAlign: 'center' }}>Location {i}</div>
                      </div>
                    ))}
                    <div style={{ minWidth: '150px', border: '1px dashed var(--border)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                      + Add Location
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div>
                <h3 style={{ marginTop: 0 }}>Visual Materials & Color System</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Define the project's global aesthetic, art medium, and color palette relationships.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  
                  <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>Art Medium & Texture</h4>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Global Medium</label>
                    <select style={{ width: '100%', padding: '8px', marginBottom: '16px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                      <option>Digital Ink & Screentone (Manga)</option>
                      <option>Graphite Sketch</option>
                      <option>Watercolor & Pen</option>
                      <option>Oil Painting</option>
                      <option>3D Cel-Shaded Render</option>
                    </select>

                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Primary Brush Engine</label>
                    <select style={{ width: '100%', padding: '8px', marginBottom: '16px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                      <option>G-Pen (Crisp, High Pressure)</option>
                      <option>Marker (Flat, Solid)</option>
                      <option>Charcoal (Textured)</option>
                    </select>

                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Canvas Surface Texture</label>
                    <select style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                      <option>Smooth Bristol</option>
                      <option>Cold Press Watercolor</option>
                      <option>Newsprint</option>
                    </select>
                  </div>

                  <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>Color System</h4>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Palette Relationship</label>
                    <select style={{ width: '100%', padding: '8px', marginBottom: '16px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                      <option>Monochrome (B&W)</option>
                      <option>Complementary</option>
                      <option>Analogous</option>
                      <option>Triadic</option>
                      <option>Cinematic Teal & Orange</option>
                    </select>

                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Active Swatches</label>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      {['#0f172a', '#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#ffffff'].map(color => (
                        <div key={color} style={{ width: '32px', height: '32px', backgroundColor: color, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}></div>
                      ))}
                    </div>

                    <button className="btn" style={{ width: '100%', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', border: '1px solid #3b82f6' }}>
                      ✨ AI Extract Palette from Image
                    </button>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'ai_integration' && (
              <div>
                <h3 style={{ marginTop: 0 }}>AI Generation Settings</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Configure image generation engines and enforce character/style consistency.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  
                  <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>Provider Abstraction</h4>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Active Image Engine</label>
                    <select style={{ width: '100%', padding: '8px', marginBottom: '16px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}>
                      <option>Stable Diffusion XL (Local)</option>
                      <option>Midjourney V6 (API)</option>
                      <option>DALL-E 3 (API)</option>
                      <option>Niji 6 (Anime/Manga)</option>
                    </select>

                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>API Key / Connection</label>
                    <input type="password" placeholder="sk-..." style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }} />
                  </div>

                  <div style={{ background: 'var(--panel-bg)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>Consistency Locks</h4>
                    
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Character Identity Locks (LoRA / IPAdapter)</label>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px', borderRadius: '4px', marginBottom: '16px', fontSize: '12px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <input type="checkbox" defaultChecked /> Lock "Protagonist" to LoRA: hero_v2.safetensors
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input type="checkbox" defaultChecked /> Lock "Villain" to Reference Seed: 90210
                      </label>
                    </div>

                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Style Bible Linkage</label>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', padding: '12px', borderRadius: '4px', color: '#60a5fa', fontSize: '12px' }}>
                      ✓ Prompts will automatically inherit global Art Medium and Color Palette settings.
                    </div>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'continuity' && (
              <div>
                <h3 style={{ marginTop: 0 }}>Continuity Inspector</h3>
                <p style={{ color: 'var(--text-secondary)' }}>AI-driven tracking of character elements and prop states across panels to prevent mismatches.</p>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', padding: '16px', borderRadius: '8px', color: '#60a5fa' }}>
                  <strong>Status:</strong> No continuity errors detected in current scene.
                  <br /><br />
                  <small>The Continuity Engine constantly checks the Canvas metadata against the Character and World Bible to ensure consistent staging, props, and character states.</small>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleModal;
