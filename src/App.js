import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MyPortfolio from './pages/components/MyPortfolio/MyPortfolio'
import Home from './pages/components/Hero/Home'
import ContactMe from './pages/components/ContactMe/ContactMe'
import GameRepo from './pages/components/Games/GameRepo'
import Navbar from './pages/components/Navbar/Navbar'

function App () {
  return (
    <Router>
      <div className='navbar-container'>
        <Navbar />
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/myPortfolio' element={<MyPortfolio />} />
          <Route path='/portfolio/games' element={<GameRepo />} />
          <Route path='/portfolio/contactMe' element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
