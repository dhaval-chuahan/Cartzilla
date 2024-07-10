
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx';
import Text from './components/Text.jsx';



export default function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Text/>
    </div>
  )
}
