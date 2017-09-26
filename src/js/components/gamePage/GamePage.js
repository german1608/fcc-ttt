import React from 'react'
import GameBoard from './GameBoard'
import GameCounter from './GameCounter'

class GamePage extends React.Component {
  constructor(props) {
    super(props)
    /* Important chars:
     * \u25B6 ▶
     * \u00D7 ×
     * \u25CB ○
    */
  }
  render () {
    return (
      <div className='hero is-fullheight'>
        <div className='hero-body game'>
          <GameCounter name='P1' counter={1} />
          <GameBoard />
          <GameCounter name='P2' counter={1} />
        </div>
      </div>
    )
  }
}

export default GamePage
