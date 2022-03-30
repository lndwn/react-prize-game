const greys = [
  "#FAFAFF",
  "#EDEFFC",
  "#DFE1F6",
  "#CFD2ED",
  "#BEC1E1",
  "#ACAED0",
  "#9798BB",
  "#7F7F9F",
  "#65647E",
  "#474659",
  "#383746",
  "#312F3C",
  "#292833",
  "#1B1A25"
];

const colors = {
  fuchsia: "#f0f",
  fadedBlue: "#8080ff",
  cyan: "#0ff",
  whites: greys,
  blacks: [...greys].reverse(),
  gradients: {}
};

colors.gradients = {
  bg: `linear-gradient(
        60deg,
        ${colors.fuchsia},
        ${colors.fadedBlue},
        ${colors.cyan})`
};

export const defaultTheme = {
  colors
};
