import React from 'react'
import styles from '../../styles/Menu.module.css'
import EachMenu from './eachmenu'

const Menu = () => {
  const { menuHolder, dishTitle, menuLeft, menuP, menuButton, menuLeftHolder, menuRight, menuRightHolder } = styles
  const dishes = [
    {
      title: 'Predjela',
      eachDish: [
        {
          dish: 'Ham & Potato Sandwiches',
          price: '50 HRK',
          description: 'French bread baguette, cooked ham, potato salad'
        },
        {
          dish: 'Ham & Potato Sandwiches',
          price: '50 HRK',
          description: 'French bread baguette, cooked ham, potato salad'
        },
      ]
    },
    {
      title: 'Glavna jela',
      eachDish: [
        {
          dish: 'Ham & Potato Sandwiches',
          price: '50 HRK',
          description: 'French bread baguette, cooked ham, potato salad'
        },
        {
          dish: 'Ham & Potato Sandwiches',
          price: '50 HRK',
          description: 'French bread baguette, cooked ham, potato salad'
        },
      ]
    },
    {
      title: 'Deserti',
      eachDish: [
        {
          dish: 'Ham & Potato Sandwiches',
          price: '50 HRK',
          description: 'French bread baguette, cooked ham, potato salad'
        },
        {
          dish: 'Ham & Potato Sandwiches',
          price: '50 HRK',
          description: 'French bread baguette, cooked ham, potato salad'
        },
      ]
    }
  ]

  return (
    <div id="Menu" className={`${menuHolder} inner-width`}>
      <div className={`${menuLeft}`}>
        <div className={`${menuLeftHolder}`}>
          <h1 className={`title playFair`}>DAILY FOOD COURSES WITH DRINKS</h1>
          <p className={`${menuP} paragraph roboto`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className={`${menuButton} roboto`} target="_blank" href="">Cijeli menu</a>
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
