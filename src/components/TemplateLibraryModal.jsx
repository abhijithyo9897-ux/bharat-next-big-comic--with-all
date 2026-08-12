import React, { useState } from 'react';

/**
 * Module M18: Style & Genre Template Library (Final Build Prompt Specification)
 * Organized into 8 precise international section categories:
 * 1. Page & Grid Templates
 * 2. Genre & Regional Format Templates (American, European, Manga, Manhwa, Manhua, Newspaper, Graphic Novel)
 * 3. Cover & Editorial Templates
 * 4. Balloon & Lettering Presets by Script (Latin, Devanagari/Indic, Arabic/Urdu, CJK)
 * 5. Color-Grade & Mood Presets
 * 6. Camera/Shot Presets
 * 7. Character Archetype Starters
 * 8. World/Environment Starter Sets
 */
const TemplateLibraryModal = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('Genre & Regional Formats');
  const [selectedTemplate, setSelectedTemplate] = useState('Japanese Shōnen Action');

  const categories = [
    'Page & Grid Templates',
    'Genre & Regional Formats',
    'Cover & Editorial Templates',
    'Balloon & Script Presets',
    'Color-Grade & Mood',
    'Camera & Shot Presets',
    'Character Archetype Starters',
    'World & Environment Sets'
  ];

  const templateData = {
    'Page & Grid Templates': [
      { name: 'Standard 6-Panel Grid', desc: 'Equal 2x3 tier layout for classic storytelling.', tag: 'Grid' },
      { name: 'Modular Swiss Layout', desc: 'Asymmetric multi-column grid with dynamic gutters.', tag: 'Grid' },
      { name: 'Broken Tier Diagonal', desc: 'Action-oriented diagonal panel splits.', tag: 'Grid' },
      { name: 'Radial Center Splash', desc: 'Central hero focal panel with radial subframes.', tag: 'Grid' }
    ],
    'Genre & Regional Formats': [
      { name: 'Japanese Shōnen Action', desc: 'Diagonal impact panels, speed lines, shout balloons.', tag: 'Manga' },
      { name: 'Japanese Shōjo / Seinen / Gekiga', desc: 'Screen-tone screentones, emotional hatching, dense ink.', tag: 'Manga' },
      { name: 'American Superhero Page', desc: 'Dynamic 6-tier grids, heavy blacks, primary colors.', tag: 'Western' },
      { name: 'Korean Manhwa Vertical Scroll', desc: 'Continuous webtoon vertical flow, wide atmospheric gaps.', tag: 'Webtoon' },
      { name: 'European BD / Album (Ligne Claire)', desc: 'Clean line, 4-tier grid, watercolor ink wash.', tag: 'Franco-Belgian' },
      { name: 'Chinese Manhua Martial Arts', desc: 'Vertical flow set-pieces with wuxia brush aesthetics.', tag: 'Manhua' },
      { name: 'Newspaper Strip (Daily & Sunday)', desc: 'Classic 3-panel horizontal or 4-tier Sunday spread.', tag: 'Strip' },
      { name: 'Graphic Novel & Doujinshi', desc: 'Full-bleed atmospheric storytelling spreads.', tag: 'Graphic Novel' }
    ],
    'Cover & Editorial Templates': [
      { name: 'Full Bleed Hero Cover', desc: 'Bold masthead top, full-bleed hero artwork.', tag: 'Cover' },
      { name: 'Magazine Masthead & Callout', desc: 'Sidebar callouts, issue number & barcode box.', tag: 'Cover' },
      { name: 'Cast Page & Recap Spread', desc: 'Photo-grid character roster & recap layout.', tag: 'Editorial' }
    ],
    'Balloon & Script Presets': [
      { name: 'Devanagari & Indic Script Defaults', desc: 'Optimized leading & line-height for Hindi, Bengali, Tamil, Telugu.', tag: 'Script' },
      { name: 'Latin Standard Dialogue', desc: 'Classic comic handwritten typography.', tag: 'Script' },
      { name: 'Arabic & Urdu RTL Flow', desc: 'Right-to-left balloon tail and text alignment.', tag: 'Script' },
      { name: 'CJK Vertical & Horizontal', desc: 'Japanese/Chinese/Korean vertical balloon bounding boxes.', tag: 'Script' }
    ],
    'Color-Grade & Mood': [
      { name: 'Cinematic Teal & Orange', desc: 'Hollywood blockbuster color grade.', tag: 'LUT' },
      { name: 'Film Noir High-Contrast', desc: 'Monochrome deep shadow mood.', tag: 'LUT' },
      { name: 'Cyberpunk Neon Glow', desc: 'Vibrant magenta and cyan backlight LUT.', tag: 'LUT' }
    ],
    'Camera & Shot Presets': [
      { name: 'Low Angle ECU Reveal', desc: 'Extreme close up, low angle, 85mm lens.', tag: 'Shot' },
      { name: 'Wide Establishing Dutch Tilt', desc: 'Wide shot, 15° Dutch angle, 24mm lens.', tag: 'Shot' }
    ],
    'Character Archetype Starters': [
      { name: 'Protagonist / Hero', desc: 'Stoic posture, signature outfit, expression set.', tag: 'Archetype' },
      { name: 'Antagonist / Villain', desc: 'Sharp silhouette, intense eyeline, shadow grading.', tag: 'Archetype' }
    ],
    'World & Environment Sets': [
      { name: 'Cyberpunk Rainy Alley', desc: 'Neon reflections, wet asphalt, steam vents.', tag: 'Environment' },
      { name: 'Monsoon Mumbai Rooftop', desc: 'Rain haze, overcast sky, cityscape background.', tag: 'Environment' }
    ]
  };

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
        border: '1px solid #10b981',
        borderRadius: '12px',
        width: '780px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 70px rgba(0,0,0,0.95)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(59, 130, 246, 0.25) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399' }}>
            <span>📚</span> International Templates & Style Presets (M18)
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
        </div>

        {/* Modal Body: Sidebar Categories + Template Grid */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          
          {/* Left Sub-Section Sidebar */}
          <div style={{ width: '220px', borderRight: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', padding: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '8px', paddingLeft: '8px' }}>
              SECTION CATEGORIES
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {categories.map(cat => (
                <li
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    marginBottom: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    background: activeCategory === cat ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                    color: activeCategory === cat ? '#34d399' : 'var(--text-secondary)',
                    fontWeight: activeCategory === cat ? 'bold' : 'normal',
                    borderLeft: activeCategory === cat ? '3px solid #10b981' : '3px solid transparent'
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Template Items */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#34d399' }}>{activeCategory}</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: '0 0 12px 0' }}>
              Select a starting preset to apply non-destructively to your active canvas.
            </p>

            {(templateData[activeCategory] || []).map(tpl => (
              <div 
                key={tpl.name}
                onClick={() => setSelectedTemplate(tpl.name)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: selectedTemplate === tpl.name ? 'rgba(255,255,255,0.08)' : 'var(--bg)',
                  border: selectedTemplate === tpl.name ? '1px solid #10b981' : '1px solid var(--border)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {tpl.name}
                    <span style={{ fontSize: '9px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '2px 6px', borderRadius: '10px' }}>{tpl.tag}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{tpl.desc}</div>
                </div>
                {selectedTemplate === tpl.name && (
                  <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '14px' }}>✓</span>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', background: 'var(--bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Selected: <strong style={{ color: 'white' }}>{selectedTemplate}</strong></span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={onClose} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border)', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>Cancel</button>
            <button 
              onClick={() => { alert(`Applied ${selectedTemplate} to Canvas!`); onClose(); }}
              style={{ padding: '8px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}
            >
              Apply Preset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TemplateLibraryModal;
