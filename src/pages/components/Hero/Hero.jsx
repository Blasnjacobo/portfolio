import * as React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'

export default function HeroSection () {
  function aboutMeDescription () {
    const str = 'About Me: I am a mechatronics engineer who has worked in different kind of projects such as building an electrical car door, research in automating the process of counting tree frogs using python and giving IT technical support to USAA, but then I realized that my biggest passion lies on web development, so I have been creating some really nice projects you can dig in by looking at the portfolio section.'
    return str
  }

  return (

    <section>
      <Navbar />
      <div className='content-box'>
        <div className='content'>
          <div>
            <h5 className='greeting'>Hey there, I'am</h5>
            <h1 className='full-inName'><spam className='name'>Blas Nunez</spam></h1>
            <h4 className='front-end'>Web Developer</h4>
          </div>
          <p className='introduction'>I am a dude who is passionate for front development and project management,
            with international work experience, and <span className='and'>a football lover</span>
          </p>
          <p className='hero-software'>Software:</p>
          <div className='section-icons'>
            <div className='icon icon-html'>HTML</div>
            <div className='icon icon-css'>CSS</div>
            <div className='icon icon-javaScript'>JavaScript</div>
            <div className='icon icon-react'>React</div>
            <div className='icon icon-nodeJs'>NodeJs</div>
            <div className='icon icon-mySql'>MySQL</div>
            <div className='icon icon-springboot'>Springboot</div>
            <div className='icon icon-git'>Git</div>
          </div>
        </div>
        <div className='picture'>{aboutMeDescription()}</div>
      </div>
    </section>
  )
}
