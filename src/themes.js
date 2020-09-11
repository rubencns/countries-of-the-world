const fonts = {
  family: "'Nunito Sans', 'sans-serif'",
  size: {
    xLarge: "24px",
    large: "20px",
    medium: "15px",
    small: "10px",
  },
  weight: {
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
    shadow: "#1c1c1c",
    moon: "hsl(0, 0%, 100%)",
  },
};

export const lightMode = {
  fonts,
  colors: {
    text: "hsl(200, 15%, 8%)",
    elements: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    input: "hsl(0, 0%, 52%)",
    shadow: "#ddd",
    moon: "hsl(200, 15%, 8%)",
  },
};
