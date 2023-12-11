import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./styles/utils";
import { themeDark, themeLight } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import React from "react";
import { useThemeApp } from "./context/themeContext";
import { Outlet } from "react-router-dom";
import { ButtonPrimary } from "./components/StyleComponents";

const App = () => {
  const { theme, toggleTheme } = useThemeApp();

  return (
    <>
      <ThemeProvider
        theme={createTheme(theme === "dark" ? themeDark : themeLight)}
      >
        <GlobalStyles />

        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
