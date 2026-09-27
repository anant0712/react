import { useState,useEffect } from "react"
import { ThemeProvider } from "./context/Theme"
import ThemeBtn from "./components/ThemeBtn"
import Cards from "./components/Cards"

const App = () => {

  const [themeMode, setThemeMode] = useState('light');
  const darkTheme = () => setThemeMode('dark');    // Function to set the theme mode to dark and the name should be same as the function name in the context file 
  // and the same for the light theme function.
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-linear-to-br from gray-400 accordion to-blue-500 via-cyan-900 dark:from-gray-900 dark:via-gray-500 dark:to-blue-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />           
          </div>
          <div className="w-full max-w-sm mx-auto ">
            <Cards />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
