import React from 'react'
import ChooseMenu from './ChooseMenu'
import {Switch, Route} from 'react-router-dom'

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

          <Switch>
            <Route exact path='/' 
              render={() => <ChooseMenu target={this} choosePlayer={choosePlayer} /> } />
            <Route exact path='/icon' render={() => <h1>hola</h1> }/>
          </Switch>
          { /*<h2>{numPlayers === null 
              ? ''
              : numPlayers === 1
              ? 'Next'
              : 'Let\'s play!'
          }</h2> */}
          {numPlayers}
        </div>
      </div>
    )
  }
}

export default MainPage
