import React from 'react'
import Button from './Button'

const IconMenu = ({onClick}) => {
  return (
    <div className='menu Icon'>
      <Button text='×' onClick={onClick('×')} />
      <Button text={`\u25CB`} onClick={onClick(`\u25CB`)} />
    </div>
  )
}

export default IconMenu
