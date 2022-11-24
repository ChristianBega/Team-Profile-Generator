const inquirer = require("inquirer");
const fs = require("fs");
const testFunc = require("./dist/generateHtml.js");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");

const employees = [];
console.log("Welcome to my app...");
function init() {
  const promptManager = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the Team Manager's name: ",
          name: "managerName",
        },
        {
          type: "input",
          message: "Please enter the Team Manager's employee ID: ",
          name: "managerID",
        },
        {
          type: "input",
          message: "Please enter the Team Manager's email: ",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "Please enter the Team Manager's office number: ",
          name: "managerOfficeNumber",
        },
      ])
      .then((res) => {
        const managerEl = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerOfficeNumber);
        employees.push(managerEl);
        promptMemberType();
      });
  };

  const promptMemberType = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Choose another team member to create: ",
          choices: ["Engineer", "Intern", "Exit"],
          name: "memberType",
        },
      ])
      .then((resChoice) => {
        switch (resChoice.memberType) {
          case "Engineer":
            promptEngineer();
            break;
          case "Intern":
            promptIntern();
            break;
          default:
            write();
        }
      });
  };

  const promptEngineer = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the Engineer's name: ",
          name: "engineerName",
        },
        {
          type: "input",
          message: "Please enter the Engineer's employee ID: ",
          name: "engineerID",
        },
        {
          type: "input",
          message: "Please enter the Engineer's email: ",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "Please enter the Engineer's Github username:  ",
          name: "engineerGithub",
        },
      ])
      .then((res) => {
        const engineerEl = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerGithub);
        employees.push(engineerEl);
        promptMemberType();
      });
  };

  const promptIntern = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the Inter's name: ",
          name: "internName",
        },
        {
          type: "input",
          message: "Please enter the Inter's ID: ",
          name: "internID",
        },
        {
          type: "input",
          message: "Please enter the Inter's email: ",
          name: "internEmail",
        },
        {
          type: "input",
          message: "Please enter the Inter's school: ",
          name: "internSchool",
        },
      ])
      .then((res) => {
        const internEl = new Intern(res.internName, res.internID, res.internEmail, res.internSchool);
        employees.push(internEl);
        promptMemberType();
      });
  };

  function write() {
    fs.writeFileSync("index.html", testFunc(employees), "utf-8");
  }
  promptManager();
}
init();
