import React from 'react'
import Button from './Button'

const ChooseMenu = ({onClick}) => {
  return (
    <div className='menu'>
      <Button text='1P' onClick={onClick(1)} />
      <Button text='2P' onClick={onClick(2)} />
    </div>
  )
}

export default ChooseMenu
