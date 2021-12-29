import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Loadable } from '@kits'

const UserList = Loadable(() => import('@pages/user/user-list'))
const ChartLine = Loadable(() => import('@pages/chart/chart-line'))

const App = () => {
  return (
    <Routes>
      <Route key={'main'} path="/" element={Navigate({to: '/user/list'})} />
      <Route key={'user-list'} path="/user/list" element={<UserList/>} />
      <Route key={'chart-line'} path="/chart/line" element={<ChartLine/>} />
    </Routes>
  )
}

export default App
