import React, { useState, useEffect } from 'react'
import styles from '../../styles/Gallery.module.css'
import LeftArrowIcon from './icons/LeftArrow'
import RightArrowIcon from './icons/RightArrow'
import PlusIcon from './icons/Plus'

const Gallery = () => {
  const { galleryHolder, arrows, imgDiv, modalBcg, activeClose, activeImageHolder, picCross, galleryLeft, eachPic, firstPicHolder, firstPic, secondPicHolder, secondPic, thirdPicHolder, thirdPic, fourthPicHolder, fourthPic, galleryRight, overlay, picHolder } = styles

  const [ activePic, setActivePic ] = useState({
    isActive: false,
    activeImage: null
  })

  const [ height, setHeight ] = useState(0)

  const handleClick = (e) => {
    setActivePic(prev => ({
      isActive: !prev.isActive,
      activeImage: e.target.id
    }))
  }

  const handleNext = operation => {
    let number = activePic.activeImage
    if (number == "8" && operation === 1) {
      number = 1
    } else if (number == "1" && operation === -1) {
      number = 8
    } else {
      number = parseInt(number) + operation
    }

    setActivePic(prev => ({
      ...prev,
      activeImage: number
    }))
  }

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    if (activePic.isActive) {
      html.style.overflow = "hidden"
      setHeight(document.getElementsByClassName('activeImg')[0].height)
    } else {
      html.style.overflow = "auto"
    }
  }, [activePic])


  return (
    <div id="Galerija" className={`${galleryHolder} inner-width`}>
      {
        activePic.isActive 
        &&
        <div className={`${activeImageHolder}`}>
          <div onClick={handleClick} className={`${modalBcg}`}></div>
          <span onClick={handleClick} className={`${activeClose}`}>
            <PlusIcon />
          </span>
          <div style={{height}} className={`${imgDiv}`}>
            <span className={`${arrows}`} onClick={() => handleNext(-1)}>
              <LeftArrowIcon />
            </span>
            <img className="activeImg" onClick={() => handleNext(1)} src={`/gallery/slika${activePic.activeImage}.png`} />
            <span className={`${arrows}`} onClick={() => handleNext(1)}>
              <RightArrowIcon />
            </span>
          </div>
        </div> 
      }
      <div className={`${galleryLeft}`}>
        <div className={`${firstPicHolder} ${picHolder}`}>
          <span id="3" onClick={handleClick} className={`${picCross}`}>
            <PlusIcon id="3" />
          </span>
          <div id="3" onClick={handleClick} className={`${overlay}`}></div>
          <div className={`${firstPic} ${eachPic}`}></div>
        </div>
        <div className={`${thirdPicHolder} ${picHolder}`}>
          <span id="7" onClick={handleClick} className={`${picCross}`}>
            <PlusIcon id="7" />
          </span>
          <div id="7" onClick={handleClick} className={`${overlay}`}></div>
          <div className={`${thirdPic} ${eachPic}`}></div>
        </div>
      </div>
      <div className={`${galleryRight}`}>
        <div className={`${secondPicHolder} ${picHolder}`}>
          <span id="1" onClick={handleClick} className={`${picCross}`}>
            <PlusIcon id="1" />
          </span>
          <div id="1" onClick={handleClick} className={`${overlay}`}></div>
          <div className={`${secondPic} ${eachPic}`}></div>
        </div>
        <div className={`${fourthPicHolder} ${picHolder}`}>
          <span id="4" onClick={handleClick} className={`${picCross}`}>
            <PlusIcon id="4" />
          </span>
          <div id="4" onClick={handleClick} className={`${overlay}`}></div>
          <div className={`${fourthPic} ${eachPic}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Gallery