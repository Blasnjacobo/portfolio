import React from 'react'
import './Repository.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Repository (props) {
  const element = <FontAwesomeIcon icon={faGithub} />
  return (
    <div className='Repository-section'>
      <img className='Repository-img' src={props.img} alt='' />
      <div className='Repository-lowerBoxSection'>
        <div className='Respository-TDL'>
          <div>
            <h1 className='Repository-title'>{props.title}</h1>
          </div>
          <div>
            <p className='Repository-description'>{props.description}</p>
          </div>
          <div className='Repository-links'>
            <a href={props.repo} target='_blank' rel='noreferrer'>
              <button className='Games-button2'>Github {element}</button>
            </a>
            <a href={props.app} target='_blank' rel='noreferrer'>
              <button className='Games-button2'>Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
