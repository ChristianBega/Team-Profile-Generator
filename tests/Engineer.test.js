const Engineer = require("../lib/Engineer");


describe("Engineer Tests: ", () => {
  const newEngineer = new Engineer("Chris", 5, "Abc@gmail.com", "T3mpz")
  test("should return the engineers Github", () => {
    expect(newEngineer.getGitHub()).toBe("T3mpz")
  })
  test("should return the role of the engineer", () => {
    expect(newEngineer.getRole()).toBe("Engineer")
  })
})