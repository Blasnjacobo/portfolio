import { Link } from 'react-router-dom'
import resume from './BlasNunezJacobo_CV.pdf'
import './Navbar.css'

export default function Navbar () {
  const style = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div className='navbar-section'>
      <a href={resume} download='resume-Blas' className='navbar-item'>
        <button className='resume'>Resume 📁</button>
      </a>
      <div className='navbar-itesm'>
        <h3 className='navbar-link'><Link to='/portfolio' style={style}>Home</Link></h3>
        <h3 className='navbar-link'><Link to='/portfolio/myPortfolio' style={style}>Portfolio</Link></h3>
        <h3 className='navbar-link'><Link to='/portfolio/games' style={style}>Games</Link></h3>
      </div>
      <p className='navbar-link navbar-contact navbar-item'><Link to='/portfolio/contactMe' style={style}>Contact Me</Link></p>
    </div>
  )
}
