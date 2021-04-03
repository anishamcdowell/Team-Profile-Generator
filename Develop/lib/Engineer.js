const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, gitHubUsername) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
    }

    askGitHubUsername() {
        return this.gitHubUsername;
    }

    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;
