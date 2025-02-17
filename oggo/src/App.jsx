import React from 'react'
import Navbar from './components/navbar.jsx'
import GeneralContainer from './components/generalContainer.jsx'
import { useState, useEffect } from 'react'
import Modal1 from './components/modal1.jsx'

function App() {
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div>
      <Navbar toggleBlur={toggleBlur} />
      <GeneralContainer isBlurred={isBlurred} />
      <Modal1 />
    </div>
  )
}

export default App
