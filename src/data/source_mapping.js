// Source-to-Feature Mapping for BHARAT NEXT BIG COMIC

export const SourceMapping = {
  // Maps PDF source concepts to actual App features/components
  
  "Shot Division & Camera Grammar": {
    targetComponent: "PropertiesPanel -> Camera Settings",
    appFeature: "Cinematic Shot Card metadata attached to Panels"
  },
  
  "Editing Styles & Integration": {
    targetComponent: "Storyboard/Timeline View",
    appFeature: "Continuity Engine & Transitions"
  },
  
  "Screenplay Units": {
    targetComponent: "Script Parser & Story Editor",
    appFeature: "Script-to-Comic Studio"
  },
  
  "Character Book": {
    targetComponent: "Asset Library -> Characters",
    appFeature: "Character Identity Locks & Pose Library"
  },
  
  "World & Sensory Reference": {
    targetComponent: "Asset Library -> Environments/Props",
    appFeature: "World Bible & Asset Browser"
  },

  "Camera Movement & AI Video Gen": {
    targetComponent: "AI Prompt Builder",
    appFeature: "AI Copilot & Motion Presets"
  }
};
