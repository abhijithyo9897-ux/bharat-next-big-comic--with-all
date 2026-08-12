import React, { useState } from 'react';

const AICopilot = ({ onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', content: 'Hello! I am your visual storytelling copilot. Select an element on the canvas or type a prompt to generate art, layout panels, or suggest script dialogue.' }
  ]);

  const taxonomyChips = [
    '[MCU]', '[Low Angle]', '[35mm]', '[Rain]', '[Teal & Orange]', '[Jagged Border]', '[Shout Balloon]', '[BOOM SFX]', '[Devanagari Title]'
  ];
  const promptChips = ['Generate Character', 'Suggest Layout', 'Extract Palette', 'Refine Dialogue', 'Create Background'];

  const handleSend = () => {
    if (!prompt.trim()) return;
    setChatHistory([...chatHistory, { role: 'user', content: prompt }]);
    setPrompt('');
    
    // Mock AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'ai', content: 'Understood. In a full implementation, I would execute the requested action against the universal canvas data.' }]);
    }, 1000);
  };

  return (
    <div style={{
      position: 'absolute',
      left: '20px',
      bottom: '20px',
      width: '350px',
      height: '500px',
      background: 'var(--panel-bg)',
      border: '1px solid var(--accent)',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
      zIndex: 200,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>✨</span> AI Copilot
        </div>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '18px' }}>×</button>
      </div>

      {/* Chat History */}
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {chatHistory.map((msg, i) => (
          <div key={i} style={{ 
            alignSelf: msg.role === 'ai' ? 'flex-start' : 'flex-end',
            background: msg.role === 'ai' ? 'rgba(255,255,255,0.05)' : 'rgba(59, 130, 246, 0.2)',
            border: msg.role === 'ai' ? '1px solid var(--border)' : '1px solid var(--primary)',
            padding: '10px 14px',
            borderRadius: '8px',
            maxWidth: '85%',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            {msg.content}
          </div>
        ))}
      </div>

      {/* Structured Prompt Chips (M15 Prompt Studio) */}
      <div style={{ padding: '0 16px 8px 16px', display: 'flex', gap: '6px', overflowX: 'auto', flexWrap: 'nowrap' }}>
        {taxonomyChips.map(chip => (
          <button 
            key={chip}
            onClick={() => setPrompt(prev => prev ? `${prev} ${chip}` : chip)}
            style={{ 
              whiteSpace: 'nowrap',
              padding: '4px 10px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              borderRadius: '14px',
              color: '#60a5fa',
              fontSize: '11px',
              cursor: 'pointer'
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Visual Prompt Builder (Chips) */}
      <div style={{ padding: '0 16px 12px 16px', display: 'flex', gap: '8px', overflowX: 'auto', flexWrap: 'nowrap' }}>
        {promptChips.map(chip => (
          <button 
            key={chip}
            onClick={() => setPrompt(chip)}
            style={{ 
              whiteSpace: 'nowrap',
              padding: '6px 12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              color: 'var(--text-secondary)',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ padding: '16px', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI to generate or edit..."
          style={{ flex: 1, padding: '10px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', borderRadius: '8px' }}
        />
        <button 
          onClick={handleSend}
          style={{ padding: '0 16px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AICopilot;
