import React from 'react'
import './Games.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Games (props) {
  const element = <FontAwesomeIcon icon={faGithub} size='xl' />
  return (
    <div className='Games-section'>
      <img className='Games-img' src={props.img} alt='' />
      <div className='Games-lowerBoxSection'>
        <h1 className='Games-title'>{props.title}</h1>
        <p className='Games-description'>{props.description}</p>
      </div>
      <div className='Games-links'>
        <a href={props.repo} target='_blank' rel='noreferrer'>
          <button className='Games-button'>githubCode {element}</button>
        </a>
        <a href={props.app} target='_blank' rel='noreferrer'>
          <button className='Games-button'>Demo</button>
        </a>
      </div>
    </div>
  )
}
