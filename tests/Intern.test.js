const Intern = require("../lib/Intern");

describe("Intern Tests: ", () => {
  const newIntern = new Intern("Chris", 3, "Abc@gmail.com", "Denver University")
  test("should return the interns school", () => {
    expect(newIntern.getSchool()).toBe("Denver University")
  })
  test("should return the role of the intern", () => {
    expect(newIntern.getRole()).toBe("Intern")
  })
})