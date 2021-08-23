import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Decorator from '@pages/workspace'
import './assets/style/index.less'

import { store } from './store'
import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <Decorator>
      <App />
    </Decorator>
  </Provider>,
  document.getElementById('root'),
)
