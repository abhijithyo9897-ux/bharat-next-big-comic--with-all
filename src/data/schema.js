// Universal Object Schema for BHARAT NEXT BIG COMIC

export const UniversalObjectSchema = {
  id: "string", // Unique identifier (UUID)
  type: "enum", // Canvas, Page, Grid, Panel, Frame, Subframe, Image, Character, etc.
  name: "string", // User-defined name
  parentId: "string", // ID of parent object (e.g., Panel ID for a Character)
  childrenIds: ["string"], // IDs of nested objects
  
  // Transform & Geometry (Universal to all visible objects)
  geometry: {
    shape: "enum", // rectangle, circle, freeform, etc.
    position: { x: "number", y: "number", z: "number" },
    size: { width: "number", height: "number", depth: "number" },
    rotation: { x: "number", y: "number", z: "number" },
    scale: { x: "number", y: "number" },
    skew: { x: "number", y: "number" },
    path: ["object"] // For freeform/vector shapes
  },

  // Visibility & State
  state: {
    visible: "boolean",
    locked: "boolean",
    opacity: "number",
    blendMode: "enum",
    zIndex: "number"
  },

  // Styling & Appearance
  style: {
    fill: "object", // Color, Gradient, Texture, Material
    stroke: {
      color: "object",
      width: "number",
      style: "enum" // solid, dashed, custom brush
    },
    shadow: "object",
    glow: "object",
    blur: "number"
  },

  // Masks & Clipping
  masking: {
    isMask: "boolean",
    clippedBy: "string", // ID of masking object
    alphaMatte: "object"
  },

  // Type-Specific Metadata (Dynamically added based on 'type')
  metadata: {
    // For Character:
    // identity, expression, pose, costume, etc.
    // For Panel:
    // shotType, cameraAngle, focalLength, depthOfField, etc.
    // For Balloon:
    // text, tailDirection, tailType, etc.
  },

  // AI & Continuity
  ai: {
    prompt: "string",
    negativePrompt: "string",
    seed: "number",
    referenceIds: ["string"]
  },

  continuity: {
    trackedProperties: ["string"],
    states: ["object"] // State machine for props/environment
  },

  // Animation & Motion (for Storyboarding/Previs/Export)
  motion: {
    keyframes: ["object"],
    physics: "object", // gravity, mass, collision
    easing: "string"
  }
};
