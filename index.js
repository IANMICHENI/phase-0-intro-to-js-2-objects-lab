

const employee = {
    name: "Mwenda M",
    streetAddress: "3344 Thika Main St",
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
       return { ...employee, [key]: value };
  }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee[key] = value;
    return employee;
  }
    function deleteFromEmployeeByKey(employee, key) {
      const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
      delete employee[key];
    return employee;
  }
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log(updatedEmployee);
   
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(destructivelyUpdatedEmployee);
    
  const employeeWithoutStreet = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutStreet);
  
  
  const destructivelyRemovedStreet = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructivelyRemovedStreet);
    