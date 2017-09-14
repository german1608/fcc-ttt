import React from 'react'
import ChooseMenu from './ChooseMenu'
import IconMenu from './IconMenu'
import {Switch, Route, Link} from 'react-router-dom'

class MainPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numPlayers: null,
      icon: null
    }
    this.options = {
      null: '/',
      '1': '/icon',
      '2': '/game'
    }
  }
  choosePlayer (i) {
    return function (e) {
      this.setState({
        numPlayers: i
      })
      console.log(this.state)
    }
  }
  chooseIcon (i) {
    return function (e) {
      console.log(this.state)
      this.setState({
        icon: i
      })
    }
  }
  handleBack (e) {
    this.setState({
      numPlayers: null,
      icon: null
    })
  }
  render () {
    const {chooseIcon, choosePlayer, state: {numPlayers, icon}, handleBack} = this
    const path = this.options[numPlayers]
    return (
      <div className='hero is-fullheight'>
        <div className='hero-body main-page'>
          <h1 className='has-text-centered'>Tic Tac Toe</h1>

          <Switch>
            <Route exact path='/'
              render={() => <ChooseMenu target={this} onClick={choosePlayer} />} />
            <Route exact path='/icon'
              render={() => <IconMenu target={this} onClick={chooseIcon} />} />
          </Switch>

          <Switch>
            <Route exact path='/'
              render={() => {
                return (
                  <div>
                    {numPlayers === null
                        ? ''
                        : <Link to={path} className='button'>
                          {numPlayers === 1
                              ? 'Next'
                              : 'Let\'s play!'
                          }</Link>
                    }
                  </div>
                )
              }} />
            <Route exact path='/icon'
              render={() => {
                return (
                  <div className='flex'>
                    <Link to='/' className='button' 
                      onClick={handleBack.bind(this)}
                      style={{marginRight: icon === null ? '' : '.75rem'}} >
                      Back
                    </Link>
                    {icon === null
                        ? ''
                        : <Link to='/game' className='button' >Play!</Link>
                    }
                  </div>
                )
              }}
            />
          </Switch>

        </div>
      </div>
    )
  }
}

export default MainPage
