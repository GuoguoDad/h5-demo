import React from 'react'
import { Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const UserList = loadable(
  () => import('@pages/user/user-list' /* webpackChunkName: 'UserList', webpackPrefetch: true */)
)
const ChartLine = loadable(
  () => import('@pages/chart/chart-line' /* webpackChunkName: 'ChartLine', webpackPrefetch: true */)
)
const CounterDemo = loadable(
  () => import('@pages/counter/Counter' /* webpackChunkName: 'Counter', webpackPrefetch: true */)
)
const TabNavbar = loadable(() => import('@pages/tab-navbar' /* webpackChunkName: 'TabNavbar', webpackPrefetch: true */))
const CardSlider = loadable(
  () => import('@pages/card-slider' /* webpackChunkName: 'CardSlider', webpackPrefetch: true */)
)

const NthChild = loadable(
  () => import('@pages/sandpack/nth-child' /* webpackChunkName: 'NthChild', webpackPrefetch: true */)
)
const TabNav1 = loadable(
  () => import('@pages/sandpack/tab-nav-1' /* webpackChunkName: 'TabNav1', webpackPrefetch: true */)
)
const TabNav2 = loadable(
  () => import('@pages/sandpack/tab-nav-2' /* webpackChunkName: 'TabNav2', webpackPrefetch: true */)
)
const SandCardSlider = loadable(
  () => import('@pages/sandpack/card-slider-1' /* webpackChunkName: 'SandCardSlider', webpackPrefetch: true */)
)
const Transform1 = loadable(
  () => import('@pages/sandpack/transform1' /* webpackChunkName: 'transform1', webpackPrefetch: true */)
)
const ScrollIndicator = loadable(
  () => import('@pages/sandpack/scroll-indicator' /* webpackChunkName: 'ScrollIndicator', webpackPrefetch: true */)
)

const App = () => {
  return (
    <Routes>
      <Route key={'user-list'} path="/user/list" element={<UserList />} />
      <Route key={'chart-line'} path="/chart/line" element={<ChartLine />} />
      <Route key={'counter-demo'} path="/counter" element={<CounterDemo />} />
      <Route key={'tab-navbar'} path="/tab/navbar" element={<TabNavbar />} />
      <Route key={'card-slider'} path="/card/slider" element={<CardSlider />} />
      {/*使用:nth-child()选择指定元素*/}
      <Route key={'NthChild'} path="/sandbox/nth-child" element={<NthChild />} />
      {/*纯CSS实现Tab切换(静态)*/}
      <Route key={'tab-navbar1'} path="/sandbox/navbar1" element={<TabNav1 />} />
      {/*纯CSS实现Tab切换(动态)*/}
      <Route key={'tab-navbar2'} path="/sandbox/navbar2" element={<TabNav2 />} />
      {/*手动实现滑动卡片*/}
      <Route key={'card-slider1'} path="/sandbox/card/slider" element={<SandCardSlider />} />
      {/*使用transform描绘像素边框*/}
      <Route key={'transform1'} path="/sandbox/transform1" element={<Transform1 />} />
      {/*滚动指示器*/}
      <Route key={'ScrollIndicator'} path="/sandbox/scroll/indicator" element={<ScrollIndicator />} />
    </Routes>
  )
}

export default App
