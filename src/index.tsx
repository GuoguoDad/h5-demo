import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'babel-polyfill'
import './index.less'

import { store } from './store'

import Home from '@pages/home'

ReactDOM.render(
  <>
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/Home" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  </>,
  document.getElementById('root')
)
