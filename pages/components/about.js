import React from 'react'
import styles from '../../styles/About.module.css'

const About = () => {
  const { aboutHolder, title, image, aboutLeft, aboutRight } = styles

  return (
    <div id="Onama" className={`${aboutHolder} inner-width`}>
      <div className={`${aboutLeft}`}>
        <h1 className={`${title} title playFair`}>O nama</h1>
        <p className={`paragraph roboto`}>Šarenilo boja podsjeća na proljeće, no danas predstavlja novu gastro oazu Come to mama koja se nalazi u Kuzminečkoj 10 u zapadnom dijelu Zagreba, tik do Jarunskog jezera. Novi restoran modernog je štiha. Sama visina prostora od pet metara daje prostranost u koji su se odlično uklopili razni detalji koji daju toplinu i želju da ovo mjesto posjetimo ponovno.</p>
        <p className={`paragraph roboto`}>Na 200 m2 restoranskog dijela i barskog dijela može se smjestiti stotinjak gostiju, dok je terasa također podijeljena u dva dijela. Vedre boje koje prevladavaju odmah popravljaju raspoloženje svakom posjetitelju. Restoran nudi izvrsne pizze Romane koje predstavljaju deset poglavlja gastro putovanja. Uz izbor svježih, zdravih salata tu je i plata uz koje ćemo s prijateljima rado provoditi vrijeme. Veseli bar namijenjen je uživanju u vrhunskom izboru brojnih pića te ritualnom ispijanju kave u ugodnoj atmosferi.</p>
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