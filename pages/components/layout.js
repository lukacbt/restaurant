import React from 'react'
import Navbar from './navbar.js'
import Footer from './footer.js'
import styles from '../../styles/Layout.module.css'

const layout = props => {
  const { contentHolder, fixedLeft, fixedRight, fixed, paragraphLeft, paragraphRight } = styles
  
  const handleReservation = () => {
    document.getElementById('Rezerviraj').scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <span>
      <Navbar />
      <div className={contentHolder}>
        <a href="/jelovnik.pdf" target="_blank">
          <div className={`${fixedLeft} ${fixed}`}>
            <p className={`${paragraphLeft} roboto`}>Cijeli Menu</p>
          </div>
        </a>
        <div className={`${fixedRight} ${fixed}`} onClick={handleReservation}>
          <p className={`${paragraphRight} roboto`}>Rezerviraj</p>
        </div>
        {props.children}
      </div>
      <Footer />
    </span>
  )
}

export default layout
