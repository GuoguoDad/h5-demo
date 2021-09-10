import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Loadable } from '@kits'

const UserList = Loadable(() => import('@pages/user/user-list'))
const ChartLine = Loadable(() => import('@pages/chart/chart-line'))

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => (
        <Redirect to="/user/list" />
      )} />
      <Route key={'user-list'} path="/user/list" exact={true} component={UserList} />
      <Route key={'chart-line'} path="/chart/line" exact={true} component={ChartLine} />
    </Switch>
  )
}

export default Routes
