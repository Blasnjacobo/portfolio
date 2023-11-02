import { Link } from 'react-router-dom'
import resume from './BlasNunezJacobo_cv.pdf'
import './Navbar.css'

export default function Navbar () {
  const style = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div className='navbar-section'>
      <a href={resume} download='resume-Blas'>
        <button className='resume'>Resume 📁</button>
      </a>
      <div className='navbar-itesm'>
        <p className='navbar-link'><Link to='/portfolio' style={style}>Home</Link></p>
        <p className='navbar-link'><Link to='/portfolio/myPortfolio' style={style}>Portfolio</Link></p>
        <p className='navbar-link'><Link to='/portfolio/games' style={style}>Games</Link></p>
      </div>
      <p className='navbar-link navbar-contact'><Link to='/portfolio/contactMe' style={style}>🙋🏻Contact Me 🙋🏼</Link></p>
    </div>
  )
}
