import React from 'react'
import {Link} from 'react-router'

class MenuPage extends React.Component {
  render () {
    console.log('hola')
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Link to='game'>Play</Link>
      </div>
    )
  }
}

export default MenuPage
