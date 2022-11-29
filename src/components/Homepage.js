import React, {useState} from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./Context/Theme";
import Home from "./Home";


export default function Homepage() {
  const [theme, setTheme] = useState("light");
  return (
  
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
      <Navbar/>
            <ThemeToggle/>
            <Home/>
      <Footer/>
      </div>
    </ThemeContext.Provider>
    
    </>
  )
}
