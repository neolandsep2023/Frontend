import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./styles/utils";
import { themeDark, themeLight } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import React from "react";
import { useThemeApp } from "./context/themeContext";
import { Outlet } from "react-router-dom";



const App = () => {
  // const { theme, toggleTheme } = useThemeApp();


  return (
    <>
       <main>
      <Outlet/>
      </main>
    </>
   
  )
    //ThemeProvider es de la librería de emotion y nos permite hacer el toggle de dark y light que hemos creado en theme, con la funcion createTheme de utils
{/* <ThemeProvider theme={createTheme(theme === "dark" ? themeDark : themeLight)}> 
    <GlobalStyles/> */}

   

  
//  </ThemeProvider>

  
}

export default App