import Navbar from './components/Navbar'
import ThemeContext from './context/ThemeContext'


const App = () => {
  return (
    <ThemeContext>
      <Navbar />
    </ThemeContext>
  )
}

export default App
