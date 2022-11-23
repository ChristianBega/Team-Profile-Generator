const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
  }
  getGitHub() {}
  getRole() {
    // return "Engineer"
  }
}
module.exports = Engineer;
