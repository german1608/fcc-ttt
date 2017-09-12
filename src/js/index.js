import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import MainPage from './components/mainPage/MainPage'
import GamePage from './components/gamePage/GamePage'
import '../sass/index.sass'

// const Hola = (props) => <h1>Hola</h1>

render((
  <HashRouter hashType='noslash' >
    <div>
      <Switch>
        <Route path='/game' component={GamePage} />
        <Route path='/' component={MainPage} />
      </Switch>
    </div>
  </HashRouter>
), document.getElementById('app'))
