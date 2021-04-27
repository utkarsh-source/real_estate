import './App.css';
import Header from './components/Header'
import React, { useRef, useState } from 'react'
import Hero from './components/Hero'
import Dropdown from './components/Dropdown'
import Catogories from './components/Catogories' 
import Properties from './components/Properties'
import About from './components/About'
import AddOn from './components/AddOn'
import Testimonials from './components/Testimonials'
import Agents from './components/Agents'
import Footer from './components/Footer'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      < Header toggle={toggle} setToggle={setToggle} />
      <Dropdown toggle={toggle} setToggle={setToggle}/>
      <Hero />
      <Catogories/>
      <Properties />
      <About/>
      <AddOn />
      <Testimonials/>
      <Agents/>
      <Footer/>
    </div>
  );
}

export default App;
