import { createSlice } from '@reduxjs/toolkit'

function createData(id, name, isConnected ,unusalHours, hours, options) {
    return { id, name, isConnected ,unusalHours, manualHours: unusalHours, hours, totalHours: unusalHours + hours, options};
  }
  
  const allEmployees = [
    createData("203483924", "yoav sharon", true, 155,4),
    createData("209876665", "yoav sharon", false, 155,4),
    // createData("207554398", "yoav sharon", true, 155,4),
    // createData("234323456", "yoav sharon", true, 155,4),
    // createData("290890976", "yoav sharon", true, 155,4),
    // createData("233431235", "yoav sharon", false, 155,4),
    // createData("235678789", "yoav sharon", true, 155,4),
    // createData("675453219", "yoav sharon", false, 155,4),
    // createData("321232145", "yoav sharon", true, 155,4),
    // createData("309876513", "yoav sharon", true, 155,4),
    // createData("786543090", "yoav sharon", true, 155,4),
    // createData("122322232", "yoav sharon", false, 155,4),
    
  ];

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

// Action creators are generated for each case reducer function
export const { UpdateEmployees } = employeesSlice.actions

export default employeesSlice.reducer