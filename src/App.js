import './App.css';
import MyPortfolio from './pages/components/MyPortfolio/MyPortfolio';
import HeroSection from './pages/components/Hero/Hero';
import ContactMe from './pages/components/ContactMe/ContactMe';
import GameRepo from './pages/components/Games/GameRepo';
import React from "react";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroSection />
  },
  {
    path: "/myPortfolio",
    element: <MyPortfolio />
  },
  {
    path: "/games",
    element: <GameRepo />
  },
  {
    path: "/contactMe",
    element: <ContactMe />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

