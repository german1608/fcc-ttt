import React from 'react'

const Button = (props) => {
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
