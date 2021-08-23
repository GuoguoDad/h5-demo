import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@store'
import { useHistory } from 'react-router'
import { bachSetState } from '../slice'

const { SubMenu } = Menu
const { Sider } = Layout

const LeftMenu = (props: MenuProps) => {
  const history = useHistory()
  const dispatch: AppDispatch = useDispatch()
  const { menuKey, subMenuKey, collapsed } = useSelector((state: RootState) => state.workspace)

  const changeUrl = (url: string, name: string) => {
    if(history.location.pathname !== url){
      history.push(url)
    }
    dispatch(bachSetState({ memuName: name }))
  }

  return (
    <Sider className="layout-sider" trigger={null} collapsible width={256} collapsed={collapsed}>
      <div className="common-logo">
        <h1></h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[menuKey]}
        defaultOpenKeys={[subMenuKey]}
        style={{ height: 'calc(100% - 64)', borderRight: 0, padding: '16px 0' }}
      >
        <SubMenu
          key="user"
          title={
            <span>
              <Icon type="user" />
              <span>系统管理</span>
            </span>
          }
        >
          <Menu.Item key="userlist">
            <a onClick={() => changeUrl('/user/list', '用户管理')}>用户管理</a>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="chart"
          title={
            <span>
              <Icon type="laptop" />
              <span>图表</span>
            </span>
          }
        >
          <Menu.Item key="chartline">
            <a onClick={() => changeUrl('/chart/line', '折线图')}>折线图</a>
          </Menu.Item>
          <Menu.Item key="chartpie">
            <a onClick={() => changeUrl('/chart/pie', '饼图')}>饼图</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default LeftMenu

type MenuProps = {}
