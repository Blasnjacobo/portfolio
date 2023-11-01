import React from 'react'
import './Repository.css'

export default function Repository (props) {
  return (
    <div className='Repository-section'>
      <img className='Repository-img' src={props.img} alt='' />
      <div className='Repository-lowerBoxSection'>
        <div>
          <h1 className='Repository-title'>{props.title}</h1>
          <p className='Repository-description'>{props.description}</p>
        </div>
        <div className='Repository-links'>
          <a href={props.repo} target='_blank' rel='noreferrer'>
            <button className='Repository-githubCode'>Github</button>
          </a>
          <a href={props.app} target='_blank' rel='noreferrer'>
            <button className='Repository-Demo'>Demo</button>
          </a>
        </div>
      </div>
    </div>
  )
}
