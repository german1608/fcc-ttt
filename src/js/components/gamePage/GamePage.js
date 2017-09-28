import React from 'react'
import GameBoard from './GameBoard'
import GameCounter from './GameCounter'
import gameEngine from 'ttt-eng-fcc'

class GamePage extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className='hero is-fullheight'>
        <div className='hero-body game'>
          <GameCounter name='P1' counter={1} />
          <GameBoard board={[
            'x', ' ', ' ',
            ' ', 'o', ' ',
            ' ', 'o', 'x'
          ]}
          />
          <GameCounter name='P2' counter={1} />
        </div>
      </div>
    )
  }
}

export default GamePage
