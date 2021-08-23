import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import './assets/style/index.less'
import { store } from './store'
import Routes from './routes'

import Decorator from '@pages/workspace'

const history = createHashHistory()

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Decorator>
          <Routes />
        </Decorator>
      </Router>
    </Provider>,
  document.getElementById('root')
)
