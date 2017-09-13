import React from 'react'
import ChooseMenu from './ChooseMenu'
import IconMenu from './IconMenu'
import {Switch, Route, Link} from 'react-router-dom'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numPlayers: null,
      icon: '×'
    }
    this.options = {
      null: '/',
      '1': '/icon',
      '2': '/game'
    }
  }
  choosePlayer(i) {
    return function (e) {
      this.setState({
        numPlayers: i
      })
    }
  }
  chooseIcon(i) {
    return function (e) {
      this.setState({
        icon: i
      })
    }
  }
  render() {
    const {choosePlayer, state: {numPlayers}} = this
    const path = this.options[numPlayers]
    return (
      <div className='hero is-fullheight'>
        <div className="hero-body main-page">
          <h1 className='has-text-centered'>Tic Tac Toe</h1>

          <Switch>
            <Route exact path='/' 
              render={() => <ChooseMenu target={this} onClick={choosePlayer} /> } />
            <Route exact path='/icon' 
              render={() => <IconMenu target={this} chooseIcon={choosePlayer}/> } />
          </Switch>

          {numPlayers === null
              ? ''
              : <Link to={path} className='button'>
                {numPlayers === 1 
                  ? 'Next'
                  : 'Let\'s play!'
              }</Link>
          }
        </div>
      </div>
    )
  }
}

export default MainPage
