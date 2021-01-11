import React, { useState } from 'react'
import styles from '../../styles/Reservation.module.css'
import emailjs from 'emailjs-com'

const Reservation = () => {
  const { reservationHolder, form, bottomFormHolder, succ, resTitle, disabled, error, reservationLeftHolder, date, time, option, reservationButton, input, textarea, reservationLeft, reservationRight } = styles
  const timeOfDay = ["Vrijeme rezervacije *", "16:00 h", "16:30 h", "17:00 h", "17:30 h", "18:00 h", "18:30 h", "19:00 h", "19:30 h", "20:00 h", "20:30 h", "21:00 h"]
  const [ rForm, setForm ] = useState({broj: null, ime: ''})
  const [ success, setSuccess ] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (rForm && rForm.broj?.length > 0 && rForm.ime.length > 0) {
      return false
    } else {
      return true
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_1jy8twx', 'template_ya74n8y', e.target, 'user_CWlJywwGZIbkQQPKVEKtb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
    setForm({broj: null, ime: ''})
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <div id="Rezerviraj" className={`${reservationHolder} inner-width`}>
      <div className={`${reservationLeftHolder}`}>
        <div className={`${reservationLeft}`}>
          <form className={`${form}`} onSubmit={sendEmail}>
            <input onChange={handleChange} className={`${input} roboto`} placeholder="Vaše ime i prezime (Obavezno polje)" type="text" name="ime" />
            <input className={`${input} ${time} roboto`} placeholder="Datum rezervacije" type="date" name="datum" />
            <select className={`${input} ${date} roboto`} name="vrijeme">
              {
                timeOfDay.map(t => (
                  <option className={`${option}`} key={t}>{t}</option>
                ))
              }
            </select>
            <input className={`${input} roboto`} placeholder="Broj osoba" type="number" name="brojOsoba" />
            <input onChange={handleChange} className={`${input} roboto`} placeholder="Vaš kontakt broj (Obavezno polje)" type="number" name="broj" />
            <input className={`${input} roboto`} placeholder="Vaša e-mail adresa" type="email" name="email" />
            <textarea className={`${input} ${textarea} roboto`} placeholder="Dodatna poruka ..." name="poruka" />
            <div className={`${bottomFormHolder}`}>
              <button disabled={validateForm()} className={`${reservationButton} ${validateForm() && disabled} roboto`}>Pošalji upit</button>
              {
                success
                &&
                <span className={`${succ} roboto`}>Rezervacija uspješno poslana, kontaktirat ćemo Vas uskoro!</span>
              }
            </div>
          </form>
        </div>
      </div>
      <div className={`${reservationRight}`}>
        <h1 className={`${resTitle} title playFair`}>Rezerviraj stol</h1>
        <p className={`paragraph roboto`}>Ljubitelji pizze Romana, jednostavne, a tako bogate okusom, s najboljim mogućim sastojcima, te tankom, hrskavom koricom došli su na svoje. <br/> Come to Mama sažima ideju ugođaja doma, šarenih detalja i razigranosti koji su uz ukusnu i slasnu pizzu nepogriješiva kombinacija.</p>
      </div>
    </div>
  )
}

export default Reservation