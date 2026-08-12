// Module Layer Registry & Feature Flags Manifest (Implementation Plan v2.0 Section 3.1)
// Self-contained package registration with non-breaking feature flags

export const MODULE_REGISTRY = {
  M1_PAGE_FOUNDATION: { id: "M1", name: "Page & Canvas Foundation", enabled: true, phase: 1 },
  M2_GRID_TEMPLATES: { id: "M2", name: "Grid & Layout Template Engine", enabled: true, phase: 1 },
  M3_PANEL_GEOMETRY: { id: "M3", name: "Panel Geometry & Border Studio", enabled: true, phase: 1 },
  M4_GUTTER_PACING: { id: "M4", name: "Gutter & Pacing Control", enabled: true, phase: 1 },
  M5_DEPTH_3D_STAGE: { id: "M5", name: "Depth, Layers & 3D Cut-Paper Composer", enabled: true, phase: 3 },
  M6_CAMERA_GUIDE: { id: "M6", name: "Camera & Shot-Composition Guide", enabled: true, phase: 3 },
  M7_CHARACTER_STUDIO: { id: "M7", name: "Character Studio", enabled: true, phase: 3 },
  M8_WORLD_PROP_LIBRARY: { id: "M8", name: "World, Environment & Prop Library", enabled: true, phase: 3 },
  M9_BLOCKING_ASSISTANT: { id: "M9", name: "Blocking & Composition Assistant", enabled: true, phase: 3 },
  M10_BALLOON_ENGINE: { id: "M10", name: "Speech Balloon & Lettering Engine", enabled: true, phase: 1 },
  M11_SFX_MANGA_EFFECTS: { id: "M11", name: "SFX & Motion/Manga Effects Library", enabled: true, phase: 1 },
  M12_COLOR_MATERIAL: { id: "M12", name: "Color, Grading & Material System", enabled: true, phase: 1 },
  M13_TYPOGRAPHY_MULTI_SCRIPT: { id: "M13", name: "Typography & Multi-Script Engine", enabled: true, phase: 1 },
  M14_EDITORIAL_COVER_KIT: { id: "M14", name: "Editorial/Collage & Cover Design Kit", enabled: true, phase: 4 },
  M15_AI_PROMPT_STUDIO: { id: "M15", name: "AI Prompt Studio & Script Importer", enabled: true, phase: 2 },
  M16_PANEL_DNA_INSPECTOR: { id: "M16", name: "Panel DNA Inspector", enabled: true, phase: 2 },
  M17_READING_FLOW: { id: "M17", name: "Reading-Flow & Page-Turn Tool", enabled: true, phase: 4 },
  M18_STYLE_TEMPLATES: { id: "M18", name: "Style & Genre Template Library", enabled: true, phase: 4 },
  M19_CONTINUITY_TRACKER: { id: "M19", name: "Continuity & Consistency Tracker", enabled: true, phase: 3 },
  M20_EXPORT_PUBLISH: { id: "M20", name: "Export, Publish & Interoperability", enabled: true, phase: 1 },
  M21_ASSET_MANAGEMENT: { id: "M21", name: "Asset & Project Management", enabled: true, phase: 4 },
  M22_COLLABORATION: { id: "M22", name: "Collaboration & Review", enabled: false, phase: 4 },
  M23_MOTION_PREVIEW: { id: "M23", name: "Animated Webtoon / Motion-Panel Preview", enabled: false, phase: 4 }
};

export function isModuleEnabled(moduleId) {
  const mod = Object.values(MODULE_REGISTRY).find(m => m.id === moduleId);
  return mod ? mod.enabled : false;
}
