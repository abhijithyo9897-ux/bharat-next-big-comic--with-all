// Feature Matrix for BHARAT NEXT BIG COMIC

export const FeatureMatrix = {
  CoreCapabilities: {
    Canvas: ["Create", "Resize", "Export", "Grid Align", "Guide Snap", "Bleed Toggle"],
    Panel: ["Draw", "Split", "Merge", "Mask", "Layer", "Convert to 3D", "Apply Style"],
    Asset: ["Drag & Drop", "Rotate", "Scale", "Colorize", "Flip", "Group"],
    Text: ["Write", "Format", "Warp", "Align", "Tail Attach (Balloons)"]
  },

  AIMode: {
    Commands: ["Prompt-to-Panel", "Prompt-to-Page", "Apply Style", "Fix Continuity", "Extract Palette"],
    Generation: ["Backgrounds", "Characters", "Effects", "Balloons", "SFX"],
    Analysis: ["Read Flow Validation", "Continuity Check", "Composition Critique"]
  },

  ProductionMode: {
    Tracking: ["Shot List Generation", "Script Breakdown", "Call Sheets"],
    Export: ["CBZ", "PDF", "PNG", "Animatic", "Prompt Bible"]
  },

  ParityRequirements: {
    // Ensures AI and Manual modes have 1:1 capabilities
    "Set Camera Angle": {
      Manual: "Select from Properties Panel dropdown",
      AI: "Natural language prompt ('Dutch Angle', 'Low Angle')"
    },
    "Apply Color Grade": {
      Manual: "Apply LUT or Palette from Library",
      AI: "Natural language prompt ('Make it Cyberpunk', 'Use warm tones')"
    }
  }
};
