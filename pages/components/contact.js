import React from 'react'
import styles from '../../styles/Contact.module.css'

const Contact = () => {
  const { contactHolder, iframe, contactLeft, contactRight, aTag } = styles

  return (
    <div id="Kontakt" className={`${contactHolder} inner-width`}>
      <div className={`${contactLeft}`}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.460491891483!2d15.951461215568802!3d45.80203527910641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6ea3f49ae85%3A0xb45fc6094e792a2a!2sTrako%C5%A1%C4%87anska%20ul.%2041%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1610400506383!5m2!1shr!2shr" 
          className={`${iframe}`}
        />
      </div>
      <div className={`${contactRight}`}>
        <h1 className={`title playFair`}>Kontakt</h1>
        <p className={`paragraph roboto`}><strong>Adresa:</strong> Trakošćanska 41, 10110 Zagreb</p>
        <p className={`paragraph roboto`}><strong>Kontakt broj:</strong> <a className={`${aTag}`} href="tel:013634167">01/363 4147</a></p>
        <p className={`paragraph roboto`}><strong>Radno vrijeme:</strong> <br/> Ponedjeljak - Nedjelja <br/> 10 - 23:30h </p>
        <p className={`paragraph roboto`}><strong>Naziv tvrtke:</strong> Bonaca d.o.o.</p>
        <p className={`paragraph roboto`}><strong>Adresa tvrtke:</strong> Trakošćanska 41, 10000 Zagreb</p>
        <p className={`paragraph roboto`}><strong>OIB:</strong> 12345678910</p>
        <p className={`paragraph roboto`}><strong>Broj računa (IBAN):</strong> HR123456789123458, Zagrebačka banka</p>
        <p className={`paragraph roboto`}>Upite za grupe, poslovne ili obiteljske proslave slati na na <strong><a className={`${aTag}`} href="mailto:restoranbonacazg@gmail.com">restoranbonacazg@gmail.com</a></strong> ili putem kontakt forme.</p>
      </div>
    </div>
  )
}

export default Contact