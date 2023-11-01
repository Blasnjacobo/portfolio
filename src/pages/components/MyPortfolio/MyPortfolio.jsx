import React from 'react'
import Navbar from '../Navbar/Navbar'
import RepositoryData from './RepositoryData'
import Repository from './Repository'

export default function MyPortfolio () {
  const RepositoryElements = RepositoryData.map(item => {
    // eslint-disable-next-line react/jsx-key
    return (
      <Repository
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <section>
      <Navbar />
      <div className='MyPortfolio-box'>
        <div className='MyPortfolio-description'>
          <h2 className='MyPortfolio-welcome'>Welcome to my portfolio 💼</h2>
          <p className='MyPortfolio-welcomeDescription'>This is the core section which shows my most representative projects so far, cheers</p>
          <div className='Repository-list'>
            {RepositoryElements}
          </div>
        </div>
      </div>
    </section>
  )
}
