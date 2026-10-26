// Shared panel information: an array of objects, like your Day 3 and Day 9 work.
// These are broad educational descriptions, not scores for actual monitors.
let panels = [
  {
    name: "IPS LCD",
    description: "Wide viewing angles. Everyday versatility.",
    light: "BACKLIT LCD",
    source: "LED backlight behind liquid crystals",
    blacks: "Backlight leakage can make black look grey",
    angles: "Usually wide viewing angles",
    use: "Work, creative tasks and mixed use",
    caution: "Check dark-room contrast and actual response measurements",
    dark: "#252821",
    bright: "#34372f",
    sideOpacity: 0.9,
    reason:
      "IPS is a balanced starting point for a screen used for work, mixed tasks or different viewing positions.",
    checks: [
      "Text clarity at your preferred size and resolution",
      "Measured response time and refresh rate",
      "Black levels, reflections and stand adjustments",
    ],
  },
  {
    name: "VA LCD",
    description: "An LCD with a focus on native contrast.",
    light: "BACKLIT LCD",
    source: "LED backlight behind liquid crystals",
    blacks: "Often deeper native blacks than conventional IPS",
    angles: "Colour and contrast can shift off centre",
    use: "Movies and contrast-focused mixed use",
    caution: "Some models show slow dark transitions; check the model",
    dark: "#131710",
    bright: "#2d3228",
    sideOpacity: 0.67,
    reason:
      "VA is worth exploring when stronger LCD contrast matters. It also suits a preference for an LCD with long static sessions.",
    checks: [
      "Dark-transition smearing in independent motion tests",
      "Viewing angles at your actual seating position",
      "Local dimming, reflections and overall brightness",
    ],
  },
  {
    name: "TN LCD",
    description: "A specialist option for focused esports use.",
    light: "BACKLIT LCD",
    source: "LED backlight behind liquid crystals",
    blacks: "Conventional backlit black levels",
    angles: "More noticeable off-axis image shifts",
    use: "Dedicated esports setups; model choice matters",
    caution: "Viewing angles and image quality involve compromises",
    dark: "#292a24",
    bright: "#393b32",
    sideOpacity: 0.42,
    reason:
      "TN can be a specialist choice when dedicated esports performance takes priority over viewing angles.",
    checks: [
      "Measured clarity at your intended refresh rate",
      "Viewing-angle and colour compromises",
      "Whether an IPS or OLED alternative better fits your other tasks",
    ],
  },
  {
    name: "OLED",
    description: "Each pixel makes its own light.",
    light: "SELF-EMISSIVE",
    source: "Light emitted by the pixels themselves",
    blacks: "Pixels can stop emitting light individually",
    angles: "Usually wide viewing angles",
    use: "Dark scenes, entertainment and fast pixel transitions",
    caution: "Repeated static content can contribute to burn-in",
    dark: "#000000",
    bright: "#1a1e17",
    sideOpacity: 0.96,
    reason:
      "OLED is worth exploring for deep blacks and fast pixel transitions, especially with moving content and darker-room use.",
    checks: [
      "Burn-in care instructions and warranty terms",
      "Text rendering for the apps you use",
      "Brightness and reflections in your room",
    ],
  },
];
