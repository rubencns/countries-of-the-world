const breakpoints = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1024px",
};

const fonts = {
  family: "'Nunito Sans', 'sans-serif'",
  size: {
    xLarge: "28px",
    large: "20px",
    medium: "15px",
    small: "14px",
  },
  weight: {
    light: 300,
    semiBold: 600,
    extraBold: 800,
  },
};

export const darkMode = {
  breakpoints,
  fonts,
  colors: {
    text: "hsl(0, 0%, 100%)",
    elements: "hsl(209, 23%, 22%)",
    background: "hsl(207, 26%, 17%)",
    input: "hsl(0, 0%, 100%)",
    shadow: "#242424",
    hover: "#858585",
    moon: "hsl(0, 0%, 100%)",
  },
};

export const lightMode = {
  breakpoints,
  fonts,
  colors: {
    text: "hsl(200, 15%, 8%)",
    elements: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    input: "hsl(0, 0%, 52%)",
    shadow: "#ddd",
    hover: "#eee",
    moon: "hsl(200, 15%, 8%)",
  },
};
