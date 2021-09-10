import React, {PropsWithChildren} from 'react'
import { RouteChildrenProps } from 'react-router'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

import Header from './components/header'
import LeftMenu from './components/menu'
import styles from './index.module.less'

const WorkSpace = (props: WorkSpaceProps) => {
  return (
    <Layout className={styles.container}>
      <LeftMenu />
      <Layout>
        <Header />
        <Content className={styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(WorkSpace)

type WorkSpaceProps = RouteChildrenProps & PropsWithChildren<{}>
