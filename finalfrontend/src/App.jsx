import { ThemeProvider } from "@emotion/react";
import { createTheme } from "./styles/utils";
import { themeDark, themeLight } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";



const App = () => {

  return (
    //ThemeProvider es de la librería de emotion y nos permite hacer el toggle de dark y light que hemos creado en theme, con la funcion createTheme de utils
<ThemeProvider theme={createTheme(theme === "dark" ? themeDark : themeLight)}> 
    <GlobalStyles/>

    <div>App</div>


 </ThemeProvider>

  )
}

export default App