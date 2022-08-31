import React from 'react'
import { Layout, Menu } from 'antd'
import { DesktopOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState, AppDispatch } from '@store'
import { bachSetState } from '../slice'
import { setDefault } from '@pages/workspace/util'

const { SubMenu } = Menu
const { Sider } = Layout

const LeftMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch: AppDispatch = useDispatch()
  const { menuKey, subMenuKey, collapsed } = useSelector((state: RootState) => state.workspace)

  const changeUrl = (url: string, name: string) => {
    if (location.pathname !== url) {
      navigate(url)
    }
    setDefault(name)
    dispatch(bachSetState({ memuName: name, menuKey: name }))
  }

  return (
    <Sider className="layout-sider" trigger={null} collapsible width={256} collapsed={collapsed}>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[menuKey]}
        defaultOpenKeys={[subMenuKey]}
        style={{ height: 'calc(100% - 64)', borderRight: 0, padding: '16px 0' }}
      >
        <SubMenu
          key="css"
          title={
            <span>
              <span>学习CSS</span>
            </span>
          }
        >
          <Menu.Item key="nth">
            <a onClick={() => changeUrl('/sandbox/nth-child', 'nth')}>使用:nth-child()选择指定元素</a>
          </Menu.Item>
          <Menu.Item key="navbar">
            <a onClick={() => changeUrl('/sandbox/navbar1', 'navbar')}>纯CSS实现Tab切换(静态)</a>
          </Menu.Item>
          <Menu.Item key="navbar2">
            <a onClick={() => changeUrl('/sandbox/navbar2', 'navbar2')}>纯CSS实现Tab切换(动态)</a>
          </Menu.Item>
          <Menu.Item key="cardSlider">
            <a onClick={() => changeUrl('/sandbox/card/slider', 'cardSlider')}>手动实现滑动卡片</a>
          </Menu.Item>
          <Menu.Item key="transform1">
            <a onClick={() => changeUrl('/sandbox/transform1', 'transform1')}>使用transform描绘像素边框</a>
          </Menu.Item>
          <Menu.Item key="scrollIndicator">
            <a onClick={() => changeUrl('/sandbox/scroll/indicator', 'scrollIndicator')}>滚动指示器</a>
          </Menu.Item>
        </SubMenu>
        {/*<SubMenu*/}
        {/*  key="user"*/}
        {/*  title={*/}
        {/*    <span>*/}
        {/*      <span>Demo</span>*/}
        {/*    </span>*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Menu.Item key="counter">*/}
        {/*    <a onClick={() => changeUrl('/counter', 'counter')}>counter</a>*/}
        {/*  </Menu.Item>*/}
        {/*  <Menu.Item key="userlist">*/}
        {/*    <a onClick={() => changeUrl('/user/list', '用户管理')}>用户管理</a>*/}
        {/*  </Menu.Item>*/}
        {/*</SubMenu>*/}
      </Menu>
    </Sider>
  )
}

export default LeftMenu
