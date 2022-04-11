import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesState'

export default configureStore({
  reducer: {
    employees: employeesReducer
  },
})