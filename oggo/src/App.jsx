import React from 'react'
import Navbar from './components/navbar.jsx'
import GeneralContainer from './components/generalContainer.jsx'
import { useState, useEffect } from 'react'
import Modal1 from './components/modal1.jsx'

function App() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [enterPage, setEnterPage] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  const enterPageFunc = () => {
    setEnterPage(!enterPage);
  }

  useEffect(() => {
    console.log(enterPage);
  }, [enterPage])

  return (
    <div>
      <Navbar toggleBlur={toggleBlur} enterPageFunc={enterPageFunc} />
      <GeneralContainer isBlurred={isBlurred} />
      <Modal1 enterPage={enterPage} setEnterPage={setEnterPage} />
    </div>
  )
}

export default App
