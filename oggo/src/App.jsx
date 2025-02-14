import React from 'react'
import Navbar from './components/navbar.jsx'
import GeneralContainer from './components/generalContainer.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div>
      <Navbar toggleBlur={toggleBlur} />
      <GeneralContainer isBlurred={isBlurred} />
    </div>
  )
}

export default App
