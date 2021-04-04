//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require ("path");

//Team/Employee Requirements
const generateTeam = require("./src/page-template");
const Employee = require("../Develop/lib/Employee.js");
const Engineer = require("../Develop/lib/Engineer.js");
const Intern = require("../Develop/lib/Intern.js");
const Manager = require("../Develop/lib/Manager.js");

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

//Empty array for all newly added team embers to be added to
const teamArray = [];

//Initialize app
function init() {
    createTeam();
    
}

function writeHtml() {
    fs.writeFileSync(outputPath, generateTeam(teamArray), err => err ? console.error(err) : console.log("SUCCESS!!"));
}


function createTeam() {
// Prompt user to begin assembling team
    console.log("ASSEMBLE YOUR TEAM...");
    //Ask what type of team member is being added
    askForNewEmployee();

function askForNewEmployee() {
    inquirer.prompt({
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add next?",
        choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"],
    }).then(data => {
        switch (data.role) {
            case "Manager":
                return managerQuestions();
            case "Engineer":
                return engineerQuestions();
            case "Intern":
                return internQuestions();
            default:
                console.log("TEAM COMPLETE! PLEASE CHECK YOUR WEBPAGE.");
                writeHtml();
                break;
        }
    })
};

//--------START: EMPLOYEE QUESTIONS AND SWITCH CASES --------

//Ask manager questions
function managerQuestions() {
    inquirer.prompt([
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
    ]).then(data => {
        //Create new engineer and add to teamArray
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
        teamArray.push(manager);
        //Continue asking for new team members
        askForNewEmployee();
        //return generateManager();
    })
}

//Ask engineer questions
function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the team engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the team engineer's id?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the team engineer's email?",
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the team enginner's github username?",
        },    
    ]).then(data => {
        //Create new engineer and add to teamArray
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
        teamArray.push(engineer);
        //Continue asking for new team members
        askForNewEmployee();
    })
};

//Intern questions
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the team intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is the team intern's id?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the team intern's email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did the team intern attend?",
        },
    ]).then(data => {
        //Creat new intern and add to teamArray
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamArray.push(intern);
        //Continue asking for new team members
        askForNewEmployee();
    })
}
};
//------------------END: EMPLOYEE QUESTIONS AND SWITCH CASES--------------

init();