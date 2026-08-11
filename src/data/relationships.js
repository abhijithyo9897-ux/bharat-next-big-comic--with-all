// Relationship Graph Mapping for BHARAT NEXT BIG COMIC
// This defines how elements interact across the universal canvas.

export const RelationshipGraph = {
  Hierarchy: {
    Universe: ["Series"],
    Series: ["Volume"],
    Volume: ["Chapter"],
    Chapter: ["Sequence"],
    Sequence: ["Scene"],
    Scene: ["Beat", "Page"],
    Page: ["Grid", "Panel", "Canvas"],
    Panel: ["Frame", "Subframe", "Mask", "Background", "Midground", "Subject", "Foreground", "Effects"],
    Subject: ["Character", "Prop"],
    Character: ["Identity", "Pose", "Expression", "Costume", "Hair"],
  },

  ContinuityRules: {
    // Defines what properties MUST remain consistent unless acted upon by an explicit transition
    Character: ["Identity", "Costume", "Hair", "Position (if static)", "Prop State"],
    Environment: ["Lighting Direction", "Weather", "Time of Day", "Architecture", "180-Degree Line"],
    Camera: ["Axis", "Perspective"]
  },

  SpatialInteractions: {
    Occlusion: "Foreground masks Midground masks Background",
    Parallax: "Foreground moves faster than Midground moves faster than Background",
    Eyeline: "Character gaze intersects Target",
    Vector: "Motion Path dictates direction across panels"
  },

  StylisticInheritance: {
    // Determines how styles cascade down the hierarchy
    StyleBible: {
      canOverride: ["Chapter", "Page", "Panel", "Character", "Object"],
      properties: ["Color Palette", "Drawing Medium", "Texture", "Typography", "Lighting Setup"]
    }
  }
};
