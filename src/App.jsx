import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiece from './components/Experiece'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About/>
    <Portfolio/>
    <Experiece/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App