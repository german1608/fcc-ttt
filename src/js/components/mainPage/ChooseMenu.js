import React from 'react'
import Button from './Button'

/**
 * Componente que mostrara el menu de seleccion
 * para la cantidad de jugadores
 *
 * El onClick que se le pasa es el onClick que se le fue
 * pasado como argumento en MainMenu.js el cual cambia
 * la cantidad de jugadores del juego.
 */

const ChooseMenu = ({onClick}) => {
  return (
    <div className='menu'>
      <Button text='1P' onClick={onClick(1)} />
      <Button text='2P' onClick={onClick(2)} />
    </div>
  )
}

export default ChooseMenu
