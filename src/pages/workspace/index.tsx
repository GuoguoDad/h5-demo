import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router'
import { Layout } from 'antd'
import LeftMenu from './components/menu'
import Header from './components/header'

const { Content } = Layout

const WorkSpace = (props: WorkSpaceProps) => {
  const history = useHistory()

  return (
    <Layout style={{ height: '100%' }}>
      <LeftMenu />
      <Layout>
        <Header />
        <Content style={{ background: '#fff', marginLeft: 15, marginRight: 15, height: '100%', overflow: 'auto' }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default WorkSpace

type WorkSpaceProps = PropsWithChildren<{}>
