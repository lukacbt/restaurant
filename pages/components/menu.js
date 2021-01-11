import React from 'react'
import styles from '../../styles/Menu.module.css'
import EachMenu from './eachmenu'

const Menu = () => {
  const { menuHolder, dishTitle, menuLeft, menuP, menuButton, menuLeftHolder, menuRight, menuRightHolder } = styles
  const dishes = [
    {
      title: 'Pizze',
      eachDish: [
        {
          dish: 'Mama Pikante',
          price: '62 HRK',
          description: 'Umak od rajčice, maslinovo ulje, mozzarella, šunka, češnjak, panceta, luk, ljuta papričica, svježi bosiljak'
        },
        {
          dish: 'Mama Prosciutto',
          price: '64 HRK',
          description: 'Umak od rajčice, dvije vrste mozzarelle, grana padano, maslinovo ulje, pršut, cherry rajčice, rukola, svježi bosiljak'
        }
      ]
    },
    {
      title: 'Salate',
      eachDish: [
        {
          dish: 'Burata',
          price: '55 HRK',
          description: 'Burata, rukola, cherry rajčice, svježi bosiljak, grisini'
        },
        {
          dish: 'Caprese',
          price: '45 HRK',
          description: 'Rajčice, mozzarella, maslinovo ulje, grisini'
        }
      ]
    },
    {
      title: 'Le Kolač',
      eachDish: [
        {
          dish: 'Pita od Jabuka',
          price: '28 HRK',
          description: ''
        },
        {
          dish: 'Yuzu Cheesecake',
          price: '28 HRK',
          description: ''
        }
      ]
    }
  ]

  return (
    <div id="Menu" className={`${menuHolder} inner-width`}>
      <div className={`${menuLeft}`}>
        <div className={`${menuLeftHolder}`}>
          <h1 className={`title playFair`}>Come to Mama - Mama Knows Best</h1>
          <p className={`${menuP} paragraph roboto`}>Come to Mama novootvoreno mjesto za vrhunsku pizzu na zagrebačkim Vrbanima koje već na prvi pogled osvaja divnim cosy interijerom koji će baš svako druženje dodatno upotpuniti i navesti goste da se iznova vraćaju. <br/>  Ovo divno mjesto u svojoj ponudi nudi izbor između deset pizza koje će, sigurni smo, zadovoljiti baš svačiji ukus. </p>
          <a className={`${menuButton} roboto`} target="_blank" href="/comeToMamaPDF.pdf">Cijeli menu</a>
        </div>
      </div>
      <div className={`${menuRight}`}>
        <div className={`${menuRightHolder}`}>
        <h1 className={`${dishTitle} playFair`}>Preporuka Chefa Kuhinje</h1>
          { dishes.length > 0 &&
            dishes.map(dish => (
              <EachMenu
                key={dish.title}
                title={dish.title}
                dishess={dish.eachDish}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Menu
