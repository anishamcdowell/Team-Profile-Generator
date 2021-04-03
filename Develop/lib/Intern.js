const Employee = require("./Employee");

class Intern extends Employee {
    class Intern extends Employee {
        constructor(name, id, school) {
            super(name, id, email);
            this.school = school;
        }
    
        askSchool() {
            return this.school;
        }
    
        getRole() {
            return "Intern";
        }
    }
}


module.exports = Intern;
