import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/index.less'
import { store } from './store'
import Routes from './routes'

import Decorator from '@pages/workspace'

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Decorator>
          <Routes />
        </Decorator>
      </HashRouter>
    </Provider>
  ,
  document.getElementById('root')
)
