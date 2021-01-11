import React from 'react'
import styles from '../../styles/Menu.module.css'
import EachMenu from './eachmenu'

const Menu = () => {
  const { menuHolder, dishTitle, menuLeft, menuP, menuButton, menuLeftHolder, menuRight, menuRightHolder } = styles
  const dishes = [
    {
      title: 'Pasta & rižoto',
      eachDish: [
        {
          dish: 'Bijeli rižoto s kozicama',
          price: '80 HRK',
          description: 'Riža, jadranske kozice, vrhnje, riblji temeljac'
        },
        {
          dish: 'Bijeli pljukanci s kozicama',
          price: '90 HRK',
          description: 'Domaća tjestenina, jadranske kozice, vrhnje, riblji temeljac'
        },
      ]
    },
    {
      title: 'Riblja jela',
      eachDish: [
        {
          dish: 'Popara od hobotnice',
          price: '80 HRK',
          description: 'Riblji temeljac, komadići jadranske hobotnice, domaća šalša od rajčice, prilog po izboru'
        },
        {
          dish: 'Bijela riba na žaru',
          price: '100 HRK',
          description: 'Orada ili brancin na žaru s blitvom i krumpirom'
        },
      ]
    },
    {
      title: 'Deserti',
      eachDish: [
        {
          dish: 'Monte torta',
          price: '25 HRK',
        },
        {
          dish: 'Štrudla od jabuke',
          price: '20 HRK',
        },
      ]
    }
  ]

  return (
    <div id="Menu" className={`${menuHolder} inner-width`}>
      <div className={`${menuLeft}`}>
        <div className={`${menuLeftHolder}`}>
          <h1 className={`title playFair`}>Mediteranska jela u srcu Zagreba</h1>
          <p className={`${menuP} paragraph roboto`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className={`${menuButton} roboto`} target="_blank" href="/jelovnik.pdf">Cijeli menu</a>
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
