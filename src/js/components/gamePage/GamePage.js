import React from 'react'
import GameBoard from './GameBoard'
import GameCounter from './GameCounter'
import gameEngine from 'ttt-eng-fcc'

function getParameterByName (name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

class GamePage extends React.Component {
  constructor (props) {
    /**
     * Explanation of each attribute:
     * - p1Icon, p2Icon: Icon for p1 and p2.
     *   When it's a singlePlayer game, p2 = cpu
     * - singlePlayer: True when the game is for 1 person
     */

    super(props)
    this.state = {
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ]
    }
    this.p1Icon = getParameterByName('i') === 'null' ? 'x' : 'o'
    this.p2Icon = this.p1Icon === 'x' ? 'o' : 'x'
    this.singlePlayer = getParameterByName('p') === '1'
    this.currentPlayer = ['p1', 'p2'][Math.floor(Math.random() * 2)]
    this.boxClick = this.boxClick.bind(this)
    console.log(this.currentPlayer)
  }

  boxClick (i) {
    return () => {
      console.log(i)
      if (this.state.board[i] !== ' ') return
    }
  }
  render () {
    const {board} = this.state
    const {boxClick} = this
    return (
      <div className='hero is-fullheight'>
        <div className='hero-body game'>
          <GameCounter name='P1' counter={1} />
          <GameBoard board={board} onClick={boxClick} />
          <GameCounter name='P2' counter={1} />
        </div>
      </div>
    )
  }
}

export default GamePage
