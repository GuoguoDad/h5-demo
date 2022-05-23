import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@store'
import App from './app'
import './assets/style/index.less'
import Workspace from '@pages/workspace'

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Workspace>
          <App />
        </Workspace>
      </HashRouter>
    </Provider>
  ,
  document.getElementById('root')
)
