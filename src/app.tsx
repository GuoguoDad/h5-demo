import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Loadable } from '@kits'

const Home = Loadable(() => import('@pages/home'))

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
