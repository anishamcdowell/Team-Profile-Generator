//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("../Develop/lib/Employee.js");
const Engineer = require("../Develop/lib/Engineer.js");
const Intern = require("../Develop/lib/Intern.js");
const Manager = require("../Develop/lib/Manager.js");

//CL Prompts
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
        },
        {
            type: "list",
            name: "selectMemberType",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        },
        {
            type: "input",
            name: "",
            message: "",
        },
        
    ])
    .then (
        fs.appendFile("index.html", response, (err) => err ? console.error(err) : console.log("Your team has been assembled!"))
    );