import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lighthTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}

