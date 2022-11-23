const inquirer = require("inquirer");
const fs = require("fs");

const promptManager = [
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
];

const promptMemberType = [
  {
    type: "checkbox",
    message: "Choose another team member to create: ",
    choices: ["Engineer", "Intern"],
    name: "memberType",
  },
];

const promptEngineer = [
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
];

const promptInter = [
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
];

function init() {
  //              pass the prompts
  inquirer.prompt().then((res) => {});
}
init();
