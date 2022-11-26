# Professional README Generator

## Description

This project is command line application that will generate a team profile page. It utilizes inquirer and node fs to prompt and create the index.html file.

---

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Tests](#tests)

---

## Installation 
Below is the following installing steps to install and run this app.

1. Clone this repo
```sh
git clone git@github.com:T3mpz/Team-Profile-Generator.git
```
2. Install NPM packages/dependencies 
```sh
npm i
```
3. Run the application 
```sh
node index.js
```
4. Run test 
```sh
npm run test
```

---

## Usage

![Alt text](../Team-Profile-Generator/images/teamgenerator.png)

---

## Credits

- [T3mpz](https://github.com/T3mpz)

---

## License

N/A

---

## Badges 
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![made-with-node.js](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)](https://www.javascript.com)

---

## Features

N/A

---


## Contribution
N/A

---


## Tests

For each class in the profile generator I tested to ensure that each of the methods on the classes were returning the expected result (tests for other classes are similar).

```
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
```