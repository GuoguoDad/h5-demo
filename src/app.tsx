import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Loadable } from '@kits'

const Home = Loadable(() => import('@pages/home'))

const App = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  )
}

export default App
