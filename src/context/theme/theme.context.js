import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextWrapper({ children }) {
  const [theme, setTheme] = useState("light");

  const onThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, onThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
