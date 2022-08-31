import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkSpaceState } from './type'
import { getDefault } from '@pages/workspace/util'

const initialState: WorkSpaceState = {
  menuName: '纯CSS',
  subMenuKey: 'css',
  menuKey: getDefault(),
  collapsed: false
}

export const WorkSpaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    bachSetState: (state: WorkSpaceState, action: PayloadAction<{ [key: string]: unknown }>) => {
      const valObj = action.payload
      Object.keys(valObj).forEach(key => (state[key] = valObj[key]))
    }
  }
})

export const { bachSetState } = WorkSpaceSlice.actions
export default WorkSpaceSlice.reducer
