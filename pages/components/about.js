import React from 'react'
import styles from '../../styles/About.module.css'

const About = () => {
  const { aboutHolder, title, image, aboutLeft, aboutRight } = styles

  return (
    <div id="Onama" className={`${aboutHolder} inner-width`}>
      <div className={`${aboutLeft}`}>
        <h1 className={`${title} title playFair`}>O nama</h1>
        <p className={`paragraph roboto`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Quotes</p>
      </div>
      <div className={`${aboutRight}`}>
      <img 
        src="/about/onama.png" 
        className={`${image}`}
      />
      </div>
    </div>
  )
}

export default About