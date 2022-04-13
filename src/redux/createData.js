
function createData(id, name, isConnected ,unusalHours, hours, options) {
    return { id, name, isConnected ,unusalHours, manualHours: unusalHours, hours, totalHours: unusalHours + hours, options};
  }
  
  const employees = [
    createData("203483924", "yoav sharon", true, 4, 155),
    createData("209876665", "yoav sharon", false, 4, 155),
    createData("207554398", "yoav sharon", true, 4, 155),
    createData("234323456", "yoav sharon", true, 4, 155),
    createData("290890976", "yoav sharon", true, 4, 155),
    createData("233431235", "yoav sharon", false, 4, 155),
    createData("235678789", "yoav sharon", true, 4, 155),
    createData("675453219", "yoav sharon", false, 4, 155),
    createData("321232145", "yoav sharon", true, 4, 155)
  ];
 
  export {employees};