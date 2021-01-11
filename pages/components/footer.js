import React from 'react'
import styles from '../../styles/Footer.module.css'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import Location from './icons/Location'
import Mail from './icons/Mail'
import Phone from './icons/Phone'

const Footer = () => {
  const { footer, footerHolder, aa, bb, anchor, dostavaHolder, svgsHolder, eachSvgHolder, eachFooterDiv, footerTitle, footerText, footerTextP } = styles
  const izbornik = ['Početna', 'Menu', 'Galerija', 'Rezerviraj', 'Onama', 'Kontakt']
  const handleClick = (e) => {
    const menu = document.getElementById(e.target.name)
    menu?.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className={`${footer}`}>
      <div className="inner-width">
        <div className={`${footerHolder}`}>
          <div className={`${eachFooterDiv}`}>
            <h3 className={`${footerTitle} playFair`}>Restoran Bonaca</h3>
            <p className={`${footerText} ${footerTextP} roboto`}>S uvijek svježim namirnicama i pažljivom pripremom jela, našim gostima želimo priuštiti jedinstveno gastronomsko iskustvo.</p>
          </div>
          <div className={`${eachFooterDiv}`}>
            <h3 className={`${footerTitle} playFair`}>Kontakt</h3>
            <span className={`${footerText} roboto`}><Location /> Trakošćanska 41, 10110 Zagreb</span>
            <span className={`${footerText} roboto`}><Phone /> Rezervacije:</span>
            <span className={`${footerText} roboto`}><a className={`${aa}`} href="tel:">01/677 5233</a> </span>
            <span className={`${footerText} roboto`}><Mail/> <a className={`${bb}`} href="mailto:restoranbonacazg@gmail.com ">restoranbonacazg@gmail.com </a></span>
          </div>
          <div className={`${eachFooterDiv}`}>
            <h3 className={`${footerTitle} playFair`}>Pronađite nas</h3>
            <div className={`${svgsHolder}`}>
              <a target="_blank" href="" className={`${eachSvgHolder}`}>
                <Facebook />
              </a>
              <a target="_blank" href="" className={`${eachSvgHolder}`}>
                <Instagram />
              </a>
            </div>
            <div className={`${dostavaHolder}`}>
              <a target="_blank" href="" className={`${anchor}`}>
                <img src="/footer/pauza.png" />
              </a>
              <a target="_blank" href="" className={`${anchor}`}>
                <img src="/footer/wolt.png" />
              </a>
              <a target="_blank" href="" className={`${anchor}`}>
                <img src="/footer/bolt.png" />
              </a>
            </div>
          </div>
          <div className={`${eachFooterDiv}`}>
            <h3 className={`${footerTitle} playFair`}>Izbornik</h3>
            {
            izbornik.map(nav => (
              nav == 'Onama'
              ?
              <a 
                name={nav}
                key={nav}
                className={`${footerText} roboto`} 
                onClick={handleClick}
              >
                O nama
              </a>
              :
              <a 
                name={nav}
                key={nav}
                className={`${footerText} roboto`} 
                onClick={handleClick}
              >
                {nav}
              </a>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
