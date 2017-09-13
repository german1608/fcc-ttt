import React from 'react'
import Button from './Button'

const IconMenu = (props) => {
  return (
    <div className="menu Icon">
      <Button text='×' onClick={() => console.log('hola')} />
      <Button text={`\u25CB`} onClick={() => console.log('hola')} />
    </div>
  )
}

export default IconMenu
