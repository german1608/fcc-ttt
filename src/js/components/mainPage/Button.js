import React from 'react'

/**
 * Boton para la parte del menu
 */

const Button = (props) => {

  /**
   * Funcion que simplemente le quita a todos los botones
   * del menu la clase `active` y se la deja al actual
   */
  const clickHandler = (e) => {
    props.onClick(e)
    document.querySelectorAll('div.button')
      .forEach(button => button.classList.remove('active'))
    e.currentTarget.classList.add('active')
  }
  return (
    <div className='button' onClick={clickHandler}>
      <span>{props.text}</span>
    </div>
  )
}

export default Button
