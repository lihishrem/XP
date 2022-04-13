import { createSlice } from '@reduxjs/toolkit'
import { employees } from './createData'

const allEmployees = employees;

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: allEmployees,
  },
  reducers: {
    UpdateEmployees: (state, action) => {
      state.employees = [...action.payload]
    }
  },
})

export const { UpdateEmployees } = employeesSlice.actions

export default employeesSlice.reducer