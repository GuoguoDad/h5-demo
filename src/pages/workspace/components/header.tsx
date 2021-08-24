import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Icon, Tag, Dropdown, Menu, Avatar } from 'antd'
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon'
import groupBy from 'lodash/groupBy'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { AppDispatch, RootState } from '@store'
import { tempData, getColor } from '../util'
import './header.less'

const { Header } = Layout

const WorkSpaceHeader = () => {
  const dispatch: AppDispatch = useDispatch()
  const { menuKey, subMenuKey, collapsed } = useSelector((state: RootState) => state.workspace)

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  function getNoticeData(notices: any) {
    if (notices.length === 0) {
      return {}
    }
    const newNotices = notices.map((notice: any) => {
      const newNotice = { ...notice }
      if (newNotice.datetime) {
        newNotice.datetime = dayjs(notice.datetime).fromNow()
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id
      }
      if (newNotice.extra && newNotice.status) {
        let color = getColor(newNotice.status)
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        )
      }
      return newNotice
    })
    return groupBy(newNotices, 'type')
  }

  const menu = (
    <Menu className="menu" selectedKeys={[]} onClick={() => {}}>
      <Menu.Item>
        <Icon type="user" />
        个人中心
      </Menu.Item>
      <Menu.Item>
        <Icon type="setting" />
        设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  )

  const noticeData = getNoticeData(tempData)

  return (
    <Header className="notice-header">
      <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={() => {}} />
      <div className="header-right">
        <NoticeIcon
          className="notice-action notice-icon"
          count={12}
          onItemClick={(item: any, tabProps: any) => {
            console.log(item, tabProps)
          }}
          onPopupVisibleChange={() => {}}
          onClear={() => {}}
          popupAlign={{ offset: [20, -16] }}
        >
          <NoticeIcon.Tab
            list={noticeData['通知']}
            title="通知"
            emptyText="你已查看所有通知"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
          />
          <NoticeIcon.Tab
            list={noticeData['消息']}
            title="消息"
            emptyText="您已读完所有消息"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
          />
          <NoticeIcon.Tab
            list={noticeData['待办']}
            title="待办"
            emptyText="你已完成所有待办"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
          />
        </NoticeIcon>
        <Dropdown overlay={menu}>
          <span className="action account">
            <Avatar
              size="small"
              className={'avatar'}
              src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            />
            {'199******06'}
          </span>
        </Dropdown>
      </div>
    </Header>
  )
}

export default WorkSpaceHeader
