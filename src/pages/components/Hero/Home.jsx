import { useEffect, useRef, useState } from 'react'
import './Home.css'
import flixprop from '../MyPortfolio/Flixprop.png'
import RepositoryData from '../MyPortfolio/RepositoryData'
import { useNavigate } from 'react-router-dom'
import universosBanner from '../Hero/banner.jpg'

export default function Home () {
  const containerRef = useRef(null)
  const [touchStartX, setTouchStartX] = useState(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [offset, setOffset] = useState(0)
  const navigate = useNavigate()
  const masProyectosData = RepositoryData.filter(item => (item.id !== 6 && item.id !== 7))

  useEffect(() => {
    setOffset(0)
  }, [])

  const scrollLeft = () => {
    if (containerRef.current && !hasScrolled) {
      const displayCount = getDisplayCount()
      let newOffset = offset - displayCount
      if (newOffset < 0) {
        newOffset = masProyectosData.length - (masProyectosData.length % displayCount || displayCount)
        if (newOffset === masProyectosData.length) {
          newOffset -= displayCount
        }
      }
      setOffset(newOffset)
    }
  }

  const scrollRight = () => {
    if (containerRef.current && !hasScrolled) {
      const displayCount = getDisplayCount()
      let newOffset = offset + displayCount
      if (newOffset >= masProyectosData.length) {
        newOffset = 0
      }
      setOffset(newOffset)
    }
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
    setHasScrolled(false)
  }

  const handleTouchMove = (e) => {
    if (touchStartX !== null && containerRef.current && !hasScrolled) {
      const touchMoveX = e.touches[0].clientX
      const deltaX = touchMoveX - touchStartX
      const direction = deltaX > 0 ? -1 : 1

      if (Math.abs(deltaX) > 100) {
        const displayCount = getDisplayCount()
        let newOffset = offset + direction * displayCount

        if (newOffset < 0) {
          newOffset = masProyectosData.length - (masProyectosData.length % displayCount || displayCount)
          if (newOffset === masProyectosData.length) {
            newOffset -= displayCount
          }
        } else if (newOffset >= masProyectosData.length) {
          newOffset = 0
        }

        setOffset(newOffset)
        setTouchStartX(null)
      }
    }
  }

  const handleTouchEnd = () => {
    setTouchStartX(null)
  }

  const handleVerTodos = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/portfolio/myPortfolio')
  }

  const getDisplayCount = () => {
    return window.innerWidth >= 960 ? 4 : 3
  }

  const currentPage = Math.floor(offset / getDisplayCount()) + 1
  const totalPages = Math.ceil(masProyectosData.length / getDisplayCount())

  return (
    <div className='homePage-section'>
      <div className='homePage-container'>
        <div className='homePage-container-info'>
          <div className='homePage-container-info-soft'>
            <h5 className='greeting'>Hey, welcome to my portfolio</h5>
            <h1 className='full-inName'><span className='name'>Blas Núñez</span></h1>
            <h4 className='front-end'>Web Developer</h4>
            <p className='introduction'>
              Mechatronics engineer graduated in 2020 at Tecnologico de Monterrey with 3 years of IT experience, 2 of them as a frontend developer
            </p>
          </div>
          <div className='homePage-container-info-hard'>
            <p className='home-software'>Software:</p>
            <div className='homePage-container-info-hard-softwares'>
              <div className='icon icon-html' />
              <div className='icon icon-css' />
              <div className='icon icon-javaScript' />
              <div className='icon icon-react' />
              <div className='icon icon-nodeJs' />
              <div className='icon icon-github' />
              <div className='icon icon-git' />
              <div className='icon icon-typescript' />
            </div>
          </div>
        </div>
        <div className='homePage-container-works'>
          <h3>Here are two of my proudest works done so far:</h3>
          <div className='homePage-container-works-cards-card'>
            <img src={flixprop} alt='flixprop website' />
            <p>Flixprop, my own website</p>
            <a className='homePage-button-flixprop' href='https://flixprop.com/' target='_blank' rel='noopener noreferrer'>
              Visita la Página
            </a>
          </div>
          <div className='homePage-container-works-cards-card'>
            <img src='https://github.com/Blasnjacobo/tenzies/blob/main/src/image.png?raw=true' alt='metal and woods website' />
            <p>Metal and woods Products, Enterprise website</p>
            <a className='homePage-button-metalAndWoods' href='https://metalandwoodproducts.com/' target='_blank' rel='noopener noreferrer'>
              Visita la Página
            </a>
          </div>
        </div>
      </div>
      <div className='homePage-Projects'>
        <img src={universosBanner} alt='Universos Banner' className='homePage-banner-image' />
        <div className='homePage-Projects-container'>
          <div className='homePage-Projects-titleVerMas'>
            <h1>Más proyectos</h1>
            <p onClick={handleVerTodos}>Ver Todos</p>
          </div>
          <div
            className='homePage-Projects-main'
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {masProyectosData.slice(offset, offset + getDisplayCount()).map((data) => (
              <a className='homePage-Projects-main-card' key={data.id} href={data.app} target='_blank' rel='noopener noreferrer'>
                <img src={data.img} alt={data.title} />
                <h4>{data.title}</h4>
              </a>
            ))}
          </div>
          <div className='homePage-Projects-scroll-arrows'>
            <div className='homePage-Projects-scroll-left' onClick={scrollLeft}><i className='bi bi-caret-left' /></div>
            <div className='homePage-Projects-cardsCount'>
              {currentPage} / {totalPages}
            </div>
            <div className='homePage-Projects-scroll-right' onClick={scrollRight}><i className='bi bi-caret-right' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
