import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from './components/mainPage/MainPage'

render((
  <BrowserRouter>
    <Switch>
      <Route path='/' component={MainPage} />
    </Switch>
  </BrowserRouter>
), document.getElementById('app'))
