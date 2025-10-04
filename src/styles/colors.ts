//src/styles/colors.ts
const colors = {
  // Neutros
  white: "#ffffff",
  black: "#000000",
  grayDark: "#333333",
  grayMedium: "#999999",
  grayLight: "#e0e0e0",

  // Primárias - verde-água / teal
  tealDark: "#012622ff",
  tealMedium: "#548687",
  tealLight: "#5eead4",
  mint: "#aafac8ff",

  // Secundárias - laranja / accent
  orangeSoft: "#f4c095",
  orangeVibrant: "#ee6352",
  orangeAccent: "#ff7900ff",

  // Feedback / Alerts (UX)
  success: "#28a745",
  error: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",

  // Outros usos
  link: "#007bff",
  disabled: "#c0c0c0",
} as const;

export default colors;