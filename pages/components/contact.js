import React from 'react'
import styles from '../../styles/Contact.module.css'

const Contact = () => {
  const { contactHolder, iframe, contactLeft, contactRight, aTag } = styles

  return (
    <div id="Kontakt" className={`${contactHolder} inner-width`}>
      <div className={`${contactLeft}`}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.0269393850594!2d15.908641015757762!3d45.79068801961908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d1514c4e6001%3A0x7e293304802fb9a1!2sKuzmine%C4%8Dka%20ul.%2010%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1609600832220!5m2!1shr!2shr" 
          className={`${iframe}`}
        />
      </div>
      <div className={`${contactRight}`}>
        <h1 className={`title playFair`}>Kontakt</h1>
        <p className={`paragraph roboto`}><strong>Adresa:</strong> Kuzminečka ulica 10, Vrbani III</p>
        <p className={`paragraph roboto`}><strong>Kontakt broj:</strong> <a className={`${aTag}`} href="tel:012029659">01/202 9659</a></p>
        <p className={`paragraph roboto`}><strong>Radno vrijeme:</strong> <br/> Ponedjeljak - Nedjelja <br/> 07 - 00h </p>
        <p className={`paragraph roboto`}><strong>Naziv tvrtke:</strong> Mama Vrbani d.o.o.</p>
        <p className={`paragraph roboto`}><strong>Adresa tvrtke:</strong> Aleja Matije Ljubeka 25, 10 000 Zagreb</p>
        <p className={`paragraph roboto`}><strong>OIB:</strong> 40496930269</p>
        <p className={`paragraph roboto`}><strong>Broj računa (IBAN):</strong> HR6023600001102836328, Zagrebačka banka</p>
        <p className={`paragraph roboto`}>Upite za grupe, poslovne ili obiteljske proslave slati na na <strong><a className={`${aTag}`} href="mailto:info@cometomama.hr">info@cometomama.hr</a></strong> ili putem kontakt forme. <br/> Za marketing upite pišite na <strong><a className={`${aTag}`} href="mailto:marketing@cometomama.hr">marketing@cometomama.hr</a></strong> </p>
      </div>
    </div>
  )
}

export default Contact