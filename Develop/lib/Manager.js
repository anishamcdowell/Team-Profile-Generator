const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, role) {
    super(name, id, email, role)
  }

  get officeNumber() {
      return `${this.officeNumber}`;
  }

}

module.exports = Manager;
