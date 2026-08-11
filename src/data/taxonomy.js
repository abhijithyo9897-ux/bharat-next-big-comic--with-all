// Complete Taxonomy Database for BHARAT NEXT BIG COMIC

export const Taxonomy = {
  Story: {
    premise: "Core foundational concept",
    logline: "One-sentence summary",
    theme: "Underlying message",
    characters: ["Protagonist", "Antagonist", "Supporting", "Foil", "Mentor", "Comic Relief"],
    structure: ["Act", "Sequence", "Scene", "Beat", "Action Beat", "Dialogue Beat"],
    elements: ["Goal", "Want", "Need", "Flaw", "Stakes", "Obstacle", "Resolution"]
  },
  
  ShotSizes: [
    { id: "ELS", name: "Extreme Long Shot", description: "Subject very small; environment dominates" },
    { id: "LS", name: "Long Shot", description: "Full body visible" },
    { id: "FS", name: "Full Shot", description: "Subject fills frame head-to-toe" },
    { id: "MLS", name: "Medium Long Shot", description: "Knees up" },
    { id: "CS", name: "Cowboy Shot", description: "Mid-thighs up" },
    { id: "MS", name: "Medium Shot", description: "Waist up" },
    { id: "MCU", name: "Medium Close-Up", description: "Chest/shoulders up" },
    { id: "CU", name: "Close-Up", description: "Face or specific object fills frame" },
    { id: "ECU", name: "Extreme Close-Up", description: "Very tight detail" },
    { id: "CH", name: "Choker", description: "Eyebrows to mouth" }
  ],

  CameraAngles: [
    "Eye Level", "High Angle", "Low Angle", "Bird's-Eye", "Overhead", 
    "Worm's-Eye", "Dutch/Canted", "Shoulder Level", "Hip Level", "Aerial"
  ],

  CameraMovement: [
    "Static", "Pan", "Tilt", "Dolly In", "Dolly Out", "Tracking", "Trucking", 
    "Crane", "Boom", "Pedestal", "Zoom", "Crash Zoom", "Dolly Zoom", 
    "Handheld", "Steadicam", "Whip Pan", "Arc", "Orbit"
  ],

  PanelGeometry: [
    "Rectangle", "Square", "Circle", "Ellipse", "Polygon", "Diagonal", 
    "Irregular", "Exploded", "Freeform", "Borderless", "Nested", "Overlapping", "Full Bleed"
  ],

  GridSystems: [
    "Modular", "Column", "Hierarchical", "Broken", "Radial", "Diagonal", "Freeform"
  ],

  DepthPlanes: [
    "Deep Background", "Background", "Midground", "Subject", "Foreground", 
    "Extreme Foreground", "Shadow", "Atmosphere", "Effects"
  ],

  Balloons: [
    "Speech", "Thought", "Whisper", "Shout", "Telepathy", "Narration", 
    "Radio", "Telephone", "Robotic", "Distorted", "Scream", "Caption"
  ],

  Effects: {
    Motion: ["Speed Lines", "Directional Streaks", "Radial Lines", "Motion Blur"],
    Impact: ["Shockwave", "Burst", "Crack", "Debris", "Distortion"],
    Atmosphere: ["Fog", "Smoke", "Mist", "Rain", "Snow", "Dust", "Particles"],
    Lighting: ["Glow", "Bloom", "Rim Light", "God Rays", "Shadow", "Silhouette"]
  },

  ArtMediums: [
    "Graphite", "Charcoal", "Ink", "Watercolor", "Gouache", "Acrylic", "Oil",
    "Pastel", "Marker", "Airbrush", "Collage", "Vector", "3D Render", "Paper-Cut"
  ],
  
  Surfaces: [
    "Paper", "Card", "Fabric", "Wood", "Metal", "Glass", "Plastic", "Digital Canvas"
  ]
};
