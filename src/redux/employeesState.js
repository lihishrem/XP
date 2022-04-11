import { createSlice } from '@reduxjs/toolkit'

function createData(id, name, isConnected ,unusalHours, hours, options) {
    return { id, name, isConnected ,unusalHours, manualHours: unusalHours, hours, totalHours: unusalHours + hours, options};
  }
  
  const allEmployees = [
    createData("203483924", "yoav sharon", true, 155,4),
    createData("209876665", "yoav sharon", false, 155,4),
    createData("207554398", "yoav sharon", true, 155,4),
    createData("234323456", "yoav sharon", true, 155,4),
    createData("290890976", "yoav sharon", true, 155,4),
    createData("233431235", "yoav sharon", false, 155,4),
    
  ];

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: allEmployees,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.employees =[]
    },
    // decrement: (state) => {
    //   state.employees -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.employees += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = employeesSlice.actions

export default employeesSlice.reducer