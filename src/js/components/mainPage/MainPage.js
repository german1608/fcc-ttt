import React from 'react'
import Button from './Button'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPlayers: null
    }
  }
  choosePlayer(i) {
    return function (e) {
      this.setState({
        numPlayers: i
      })
    }
  }
  render() {
    const {choosePlayer, state: {numPlayers}} = this
    return (
      <div className='hero is-fullheight'>
        <div className="hero-body main-page">
          <h1 className='has-text-centered'>Tic Tac Toe</h1>

          <div className='menu'>
            <Button text='1P' onClick={choosePlayer(1).bind(this)}/>
            <Button text='2P' onClick={choosePlayer(2).bind(this)}/>
          </div>
          { /*<h2>{numPlayers === null 
              ? ''
              : numPlayers === 1
              ? 'Next'
              : 'Let\'s play!'
          }</h2> */}
        </div>
      </div>
    )
  }
}

export default MainPage
