import React from 'react'
import Button from './Button'

/**
 * Componente que mostrara el menu de seleccion
 * para la cantidad de jugadores
 *
 * El onClick que se le pasa es el onClick que se le fue
 * pasado como argumento en MainMenu.js  que se encarga
 * de modificar el icono del jugador en caso de que
 * desee jugar contra la CPU
 */

const IconMenu = ({onClick}) => {
  return (
    <div className='menu Icon'>
      <Button text='×' onClick={onClick('x')} />
      <Button text={`\u25CB`} onClick={onClick(`o`)} />
    </div>
  )
}

export default IconMenu
