//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

//Team/Employee Requirements
const team = require("./src/page-template");
const Employee = require("../Develop/lib/Employee.js");
const Engineer = require("../Develop/lib/Engineer.js");
const Intern = require("../Develop/lib/Intern.js");
const Manager = require("../Develop/lib/Manager.js");
// const { listenerCount } = require("events");

//Empty array for all newly added team embers to be added to
const teamArray = [];

//Initialize app
function init() {
    //Create team html page
    //generateHtml();
    //Prompt team member questions
    addMember();
};

//Prompt user to select type of team member
function askForNewEmployee() {
    inquirer.prompt({
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add next?",
        choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"],
    }).then(data => {
        switch (data.role) {
            case "Manger":
                return managerQuestions();
            case "Engineer":
                return engineerQuestions();
            case "Intern":
                return internQuestions();
            default:
                finishTeam();
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
        //Create new manager and add to teamArray
        const manager = new Manager();
        teamArray.push(manager);
        //Continue asking for new team members
        askForNewEmployee();
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
        const engineer = new Engineer();
        teamArray.push(engineer);
        //Continue asking for new team members
        askForNewEmployee();
    })
}

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
        const intern = new Intern();
        teamArray.push(intern);
        //Continue asking for new team members
        askForNewEmployee();
    })
};

//------------------END: EMPLOYEE QUESTIONS AND SWITCH CASES--------------

function addMember() {
    //Prompt user to begin assembling team
    console.log("ASSEMBLE YOUR TEAM...");
    //Ask what type of team member is being added
    askForNewEmployee();

};

function finishTeam() {
    console.log("TEAM COMPLETE! PLEASE CHECK YOUR WEBPAGE.")
};
// //Generate HTML based on user data
// const generateHtml = data => `<html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Team</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <header class="team-heading">
//         <h1>My Team</h1>
//     </header>
//     <main class="team-area">
//         <div class="employee-card" id="manager">
//             <h2>${data.managerName} Manager</h2>
//             <div class="card-body">
//                 <div class="list-group-container">
//                     <li class="list-group-item">
//                         ID: ${data.managerId}
//                     </li>
//                     <li class="list-group-item">
//                         Email: ${data.managerEmail}
//                     </li>
//                     <li class="list-group-item">
//                         Office Number: ${data.managerOfficeNumber}
//                     </li>
//                 </div>
//             </div>
//         </div>
//         <div class="employee-card" id="engineer">
//             <h2>${data.engineerName} Engineer</h2>
//             <div class="card-body">
//                 <li class="list-group-item">
//                     ID: ${data.engineerId}
//                 </li>
//                 <li class="list-group-item">
//                     Email: ${data.engineerEmail}
//                 </li>
//                 <li class="list-group-item">
//                     GitHub: ${data.engineerGitHub}
//                 </li>
//             </div>
//         </div>
//         <div class="employee-card" id="intern">
//             <h2>${data.internName} Intern</h2>
//             <div class="card-body">
//                 <li class="list-group-item">
//                     ID: ${data.internId}
//                 </li>
//                 <li class="list-group-item">
//                     Email: ${data.internEmail}
//                 </li>
//                 <li class="list-group-item">
//                     School: ${data.internSchool}
//                 </li>
//             </div>
//         </div>
//     </main>
//     <script src="../index.js"></script>`;

// //then append data to index.html file
// const newTeam = (data) => {
//     fs.appendFile("index.html", generateHtml(data), (err) =>
//     err ? console.error(err) : console.log("TEAM ASSEMBLED!"));
// }

init();