const Employee = require("../lib/Employee");

describe("Employee Tests: ", () => {
  const newEmployee = new Employee("Chris", 1, "Abc@gmail.com")
  test("should return the name of the employee", () => {
    expect(newEmployee.getName()).toBe("Chris")
  
  })
  test("should return the ID of the employee", () => {
    expect(newEmployee.getId()).toEqual(expect.any(Number))
  
  })
  test("should return the email of the employee", () => {
    expect(newEmployee.getEmail()).toBe("Abc@gmail.com")
  
  })
  test("should return the role of the employee", () => {
    expect(newEmployee.getRole()).toBe("Employee")
  })
})
