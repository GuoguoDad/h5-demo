import { combineReducers } from '@reduxjs/toolkit'
import WorkSPaceSlice from '@pages/workspace/slice'
import CounterSlice from '@pages/counter/counterSlice'

const rootReducer = combineReducers({
  workspace: WorkSPaceSlice,
  counter: CounterSlice
})

export default rootReducer
