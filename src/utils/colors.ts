export const lightTheme = {
  background: "#F5F1E8",
  text: "#000000",
  accent: "#FFD400",
  secondary: "#999999",
  border: "#E0DDD5",
};

export const darkTheme = {
  background: "#1A1A1A",
  text: "#F5F1E8",
  accent: "#FFD400",
  secondary: "#CCCCCC",
  border: "#333333",
};

export const getThemeColors = (isDark: boolean) => {
  return isDark ? darkTheme : lightTheme;
};
