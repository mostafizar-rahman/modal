import React, { useState } from 'react'
import Modal from './components/Modal/Modal'
import img1 from "./assets/images/1.jpg"
import img2 from "./assets/images/2.png"
// import img3 from "./assets/images/3.webp"
import img4 from "./assets/images/4.jpg"
import img5 from "./assets/images/5.jpg"

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = (index, type) => {
    setModalIsOpen(true)
    setCurrentId(index)
    console.log(type)
  }
  return (
    <div>
      <img src={img1} alt="" onClick={() => handleOpenModal(1, "image")} />
      <img src={img2} alt="" />
      <img src={img4} alt="" />

      {
        modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} currentId={currentId} />
      }

    </div>
  )
}

export default App