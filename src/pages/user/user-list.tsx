import React, { useEffect } from 'react'
import { useSetState } from 'ahooks'
import { Table, Button, Pagination, Modal, Divider, Layout, Popconfirm } from 'antd'

import { queryUserList } from './web-api'
import { UserState } from './type'

const UserList = () => {
  const [state, setState] = useSetState<UserState>({
    data: [],
    selectedRowKeys: [],
    loading: true,
    total: 0,
    currentPage: 1,
    pageSize: 10
  })

  useEffect(()=>{
    queryList(state.currentPage)
  },[])

  return (
    <Layout style={{ height: '100%', backgroundColor: 'white', overflowY: 'auto' }}>
      <div style={{ margin: 10 }}>
        <span style={{ marginLeft: 8, fontSize: 12 }}>
            {state.selectedRowKeys.length > 0 ? `已选中 ${state.selectedRowKeys.length} 条数据` : ''}
        </span>
      </div>
      <Table
        size="middle"
        rowKey={record => record.id}
        locale={{ emptyText: '暂无数据' }}
        dataSource={state.data}
        loading={state.loading}
        pagination={false}
        rowSelection={{
          selectedRowKeys: state.selectedRowKeys,
          fixed: true,
          onChange: (selectedRowKeys) => {
            setState({selectedRowKeys})
          },
        }}
        columns={
          [
            {
              className: 'table-column',
              title: '姓名',
              dataIndex: 'name'
            }, {
            className: 'table-column',
            title: '部门',
            dataIndex: 'deptName'
          }, {
            className: 'table-column',
            title: '操作',
            dataIndex: '',
            width: 200,
            render: (record) => (
              <span>
                <a>修改</a>
                <Divider type="vertical" />
                 <Popconfirm title={'确认删除吗?'} onConfirm={(event: React.MouseEvent<HTMLElement>)=>{}} okText="确定" cancelText="取消">
                  <a>删除</a>
                </Popconfirm>
              </span>
            )
          },
          ]
        }
      />
      <div>
        <Pagination
          className='common-pagination'
          current={state.currentPage}
          style={{ margin: 16, fontSize: 12 }}
          onChange={(page: number, pageSize?: number)=>{
            queryList(page)
          }}
          showTotal={(total: number, range: any) => {
            return total > 0 ? `当前第 ${range[0]} - ${range[1]} 条  共计 ${total} 条` : '没有符合条件的记录'
          }}
          defaultCurrent={1}
          defaultPageSize={10}
          total={state.total}
          showQuickJumper />
      </div>
    </Layout>
  )

  function queryList(currentPage: number) {
    queryUserList().then(res => {
      setState({ data: res.dataList, total: res.totalCount, loading: false, currentPage })
    })
  }
}

export default UserList
