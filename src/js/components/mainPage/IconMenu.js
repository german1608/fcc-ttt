import React from 'react'
import Button from './Button'

const IconMenu = ({target, onClick}) => {
  return (
    <div className='menu Icon'>
      <Button text='×' onClick={onClick('×').bind(target)} />
      <Button text={`\u25CB`} onClick={onClick(`\u25CB`).bind(target)} />
    </div>
  )
}

export default IconMenu
