import React from 'react'
import Button from './Button'

const ChooseMenu = ({onClick, target}) => {
  return (
    <div className='menu'>
      <Button text='1P' onClick={onClick(1).bind(target)} />
      <Button text='2P' onClick={onClick(2).bind(target)} />
    </div>
  )
}

export default ChooseMenu
