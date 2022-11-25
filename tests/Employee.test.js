const Employee = require("../lib/Employee");

// describe("Test description", () => {
//   const employee = new Employee("chris", 1, "email");
//   it("what im testing for", () => {
//     expect(employee.name).toBe("chris");
//   });
//   it("testing for id", () => {
//     expect(employee.id).toEqual(expect.any(Number));
//   });
//   it("what im testing for email", () => {
//     expect(employee.email).toBe("email");
//   });
// });

// describe("Initialization", () => {
//   // 1st test -
//   it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
//     // Create an obj that we are testing
//     const obj = new Arithmetic();
//     // expect
//     //                     .toEqual
//     expect("number" in obj).toEqual(true);
//   });
//   // 2nd test -
//   it("should set 'number' when created", () => {
//     // var called 108
//     const num = 108;
//     // create an object that we are testing
//     const obj = new Arithmetic(num);
//     //expect
//     //                .toEqual
//     expect(obj.number).toEqual(num);
//   });
//   // 3rd Test -
//   it("should default 'number' to 0", () => {
//     const obj = new Arithmetic();

//     expect(obj.number).toEqual(0);
//   });
// });



describe("Employee Tests: ", () => {
  const newEmployee = new Employee("Chris", 1, "Abc@gmail.com")
  test("should return the name of the employee", () => {
    expect(newEmployee.name).toBe("Chris")
  
  })
  test("should return the name of the employee", () => {
    expect(newEmployee.name).toEqual(expect.any(Number))
  
  })
  test("should return the name of the employee", () => {
    expect(newEmployee.name).toBe("Abc@gmail.com")
  
  })
})