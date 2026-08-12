// Panel DNA Schema & Sync Layer Adapter (Implementation Plan v2.0 Section 3.2 & 8)
// Non-breaking, additive specification contract

export const DEFAULT_PANEL_DNA = {
  // 1. Identity & Structural Hierarchy
  panelId: "P-001",
  pageId: "Page-1",
  tierIndex: 0,

  // 2. Geometry & Borders (M2, M3)
  geometry: {
    boundaryFamily: "rectangle", // rectangle, oval, jagged, angular, shattered
    shape: "rectangle",
    x: 100,
    y: 100,
    width: 300,
    height: 200,
    rotation: 0,
    skewX: 0,
    skewY: 0
  },
  border: {
    style: "solid", // solid, double, dashed, scalloped, lightning, hand-drawn, borderless
    weight: 2,
    color: "#000000",
    condition: "closed" // closed, open, borderless, partial, implied
  },

  // 3. Gutters & Pacing (M4)
  gutter: {
    width: 12,
    style: "standard", // standard, zero, textured, illustrated
    pacingIntent: "neutral" // slow, neutral, fast, simultaneous
  },

  // 4. Depth & Layers (M5)
  depth: {
    plane: "midground", // deep-background, background, midground, character, foreground, extreme-foreground
    zIndex: 1,
    parallaxOffset: 0,
    depthMode: "flat 2D", // flat 2D, 2.5D, full parallax
    maskType: "none"
  },

  // 5. Camera & Shot Composition (M6)
  camera: {
    shotSize: "MS", // ELS, LS, FS, MLS, Cowboy, MS, MCU, CU, ECU, Choker
    angle: "eye-level", // eye-level, high, low, bird-eye, worm-eye, Dutch, POV, OTS
    tiltDegrees: 0,
    lensCategory: "35mm", // ultra-wide, wide, 35mm, 50mm, 85mm, telephoto
    compositionGrid: "rule-of-thirds", // rule-of-thirds, golden-ratio, diagonal, symmetry
    safeArea: true
  },

  // 6. Character & Assets (M7, M8)
  characters: [], // array of { characterId, pose, expression, transform, breakoutState }
  backgroundAsset: null,

  // 7. Blocking & Axis (M9)
  blocking: {
    movementPath: "none",
    axisPosition: "left",
    perspectiveGrid: "1-point"
  },

  // 8. Typography, Balloons & SFX (M10, M11, M13)
  balloons: [], // array of { id, type, text, tailTargetId, letteringStyle }
  sfxList: [], // array of { id, text, category, style, motionLineType }

  // 9. Color, Grade & Surface (M12)
  colorSystem: {
    paletteHarmony: "complementary",
    baseHue: "#3b82f6",
    lutGradeId: "standard",
    textureOverlayId: "none",
    blendMode: "normal"
  },

  // 10. Reading Flow & Continuity (M17, M19)
  readingOrder: 1,
  narrativeFunction: "action", // establish, action, reaction, reveal
  transitionType: "moment-to-moment",
  continuityFlags: [],

  // 11. AI Provenance & Prompt Data (M15)
  provenance: {
    source: "manual", // manual, AI-prompt, script-import, template
    promptSlots: {},
    generationModel: null
  }
};

/**
 * Creates a clean, validated Panel DNA record with fallback defaults.
 */
export function createPanelDNA(overrides = {}) {
  return {
    ...DEFAULT_PANEL_DNA,
    ...overrides,
    geometry: { ...DEFAULT_PANEL_DNA.geometry, ...(overrides.geometry || {}) },
    border: { ...DEFAULT_PANEL_DNA.border, ...(overrides.border || {}) },
    gutter: { ...DEFAULT_PANEL_DNA.gutter, ...(overrides.gutter || {}) },
    depth: { ...DEFAULT_PANEL_DNA.depth, ...(overrides.depth || {}) },
    camera: { ...DEFAULT_PANEL_DNA.camera, ...(overrides.camera || {}) },
    blocking: { ...DEFAULT_PANEL_DNA.blocking, ...(overrides.blocking || {}) },
    colorSystem: { ...DEFAULT_PANEL_DNA.colorSystem, ...(overrides.colorSystem || {}) },
    provenance: { ...DEFAULT_PANEL_DNA.provenance, ...(overrides.provenance || {}) }
  };
}

/**
 * Sync Layer Adapter: Translates canvas element updates (drag, resize, rotate)
 * or AI prompt inputs into the unified Panel DNA record.
 */
export function syncElementToPanelDNA(existingDNA, updateSource, payload) {
  const currentDNA = existingDNA || createPanelDNA();

  if (updateSource === "CANVAS_TRANSFORM") {
    return {
      ...currentDNA,
      geometry: {
        ...currentDNA.geometry,
        x: payload.x ?? currentDNA.geometry.x,
        y: payload.y ?? currentDNA.geometry.y,
        width: payload.width ?? currentDNA.geometry.width,
        height: payload.height ?? currentDNA.geometry.height,
        rotation: payload.rotation ?? currentDNA.geometry.rotation
      },
      provenance: { ...currentDNA.provenance, source: "manual" }
    };
  }

  if (updateSource === "CAMERA_PROMPT") {
    return {
      ...currentDNA,
      camera: {
        ...currentDNA.camera,
        shotSize: payload.shotSize || currentDNA.camera.shotSize,
        angle: payload.angle || currentDNA.camera.angle,
        tiltDegrees: payload.tiltDegrees ?? currentDNA.camera.tiltDegrees,
        lensCategory: payload.lensCategory || currentDNA.camera.lensCategory
      },
      provenance: { ...currentDNA.provenance, source: "AI-prompt", promptSlots: payload }
    };
  }

  return currentDNA;
}
