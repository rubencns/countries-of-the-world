const fonts = {
  family: "'Nunito Sans', 'sans-serif'",
  size: {
    xLarge: "16px",
    large: "14px",
    medium: "12px",
    small: "10px",
  },
  weights: {
    light: 300,
    semiBold: 600,
    extraBold: 800,
  },
};

export const darkMode = {
  fonts,
  colors: {
    text: "hsl(0, 0%, 100%)",
    elements: "hsl(209, 23%, 22%)",
    background: "hsl(207, 26%, 17%)",
  },
};

export const lightMode = {
  fonts,
  colors: {
    text: "hsl(200, 15%, 8%)",
    elements: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    input: "hsl(0, 0%, 52%)",
  },
};
