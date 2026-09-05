import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Nav2 = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div className="nav2">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Services</h3>
      <h3>Contact</h3>
      <button className="btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
    </div>
  )
}

export default Nav2
