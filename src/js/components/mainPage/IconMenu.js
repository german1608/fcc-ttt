import React from 'react'
import Button from './Button'

const IconMenu = ({onClick}) => {
  return (
    <div className='menu Icon'>
      <Button text='×' onClick={onClick('x')} />
      <Button text={`\u25CB`} onClick={onClick(`o`)} />
    </div>
  )
}

export default IconMenu
