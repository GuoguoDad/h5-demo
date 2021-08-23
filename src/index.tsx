import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import './assets/style/index.less'
import { store } from './store'
import App from './app'

import Decorator from '@pages/workspace'

const history = createHashHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Decorator>
        <App />
      </Decorator>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
