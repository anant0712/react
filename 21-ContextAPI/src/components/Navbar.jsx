import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import Nav2 from './Nav2' // Assuming Nav2.jsx is in the same folder

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <h2>Sheriyans</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar