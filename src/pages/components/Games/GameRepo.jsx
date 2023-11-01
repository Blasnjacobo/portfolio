import React from 'react'
import Navbar from '../Navbar/Navbar'
import GamesData from './GamesData'
import Games from './Games'
import Animation from './Animation'

export default function GameRepo () {
  const GamesElements = GamesData.map(item => {
    // eslint-disable-next-line react/jsx-key
    return (
      <Games
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <section>
      <Navbar />
      <div className='Games-box'>
        <div className='GamesRepo-description'>
          <h2 className='GameRepo-welcome'>Welcome to the gaming section 🎮</h2>
          <p className='GameRepo-welcomeDescription'>In this section you will find four react mini-games perfect to relax your mind, or estress it out...</p>
          <div className='Game-list'>
            {GamesElements}
          </div>
        </div>
      </div>
      <Animation />
    </section>
  )
}
