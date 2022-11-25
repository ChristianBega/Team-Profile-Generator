const Manager = require("../lib/Manager");

describe("Manager Tests: ", () => {
  const newManager = new Manager("Chris", 2, "Abc@gmail.com", 302)
  test("should return the managers office number", () => {
    expect(newManager.getOffice()).toEqual(expect.any(Number))
  })
  test("should return the role of the manager", () => {
    expect(newManager.getRole()).toBe("Manager")
  })
})

