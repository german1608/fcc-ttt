import React from 'react'
import Button from './Button'

const ChooseMenu = ({choosePlayer, target}) => {
  return (
    <div className='menu'>
      <Button text='1P' onClick={choosePlayer(1).bind(target)}/>
      <Button text='2P' onClick={choosePlayer(2).bind(target)}/>
    </div>
  )
}

export default ChooseMenu
