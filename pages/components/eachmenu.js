import React from 'react'
import styles from '../../styles/EachMenu.module.css'

const EachMenu = props => {
  const { eachDish, dishTitle, dishContainer, dishHolder, dishName, dishDesc, dotted } = styles
  const { title, dishess } = props

  return (
    <div className={`${eachDish}`} key={1}>
      <h2 className={`${dishTitle} playFair`}>{title}</h2>
      {
        dishess && dishess.map(d => {
          return (
            <div className={`${dishContainer}`} key={d.dish}>
              <div className={`${dishHolder}`}>
                <span className={`${dishName} roboto`}>{d.dish}</span>
                <span className={`${dotted}`}></span>
                <span className={`${dishName} roboto`}>{d.price}</span>
              </div>
              {
                d.description && <p className={`${dishDesc} roboto`}>({d.description})</p>
              }   
            </div>
          )
        })
      }
    </div>
  )
}

export default EachMenu
