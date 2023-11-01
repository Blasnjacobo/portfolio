import './App.css'
import MyPortfolio from './pages/components/MyPortfolio/MyPortfolio'
import HeroSection from './pages/components/Hero/Hero'
import ContactMe from './pages/components/ContactMe/ContactMe'
import GameRepo from './pages/components/Games/GameRepo'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <HeroSection />
  },
  {
    path: '/portfolio/myPortfolio',
    element: <MyPortfolio />
  },
  {
    path: '/portfolio/games',
    element: <GameRepo />
  },
  {
    path: '/portfolio/contactMe',
    element: <ContactMe />
  }
])

export default function App () {
  return (
    <RouterProvider router={router} />
  )
}
