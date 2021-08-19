import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '@pages/home'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default App
