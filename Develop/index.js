//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

//Team/Employee Requirements
const team = require("./src/page-template");
const Employee = require("../Develop/lib/Employee.js");
const Engineer = require("../Develop/lib/Engineer.js");
const Intern = require("../Develop/lib/Intern.js");
const Manager = require("../Develop/lib/Manager.js");
const { listenerCount } = require("events");

//Empty array for all newly added team embers to be added to
const teamArray = [];

//Initialize app
function init() {
    //Create team html page
    //generateHtml();
    //Prompt team member questions
    addMember();;
};

function addMember() {
    //Prompt user to begin assembling team
    console.log("ASSEMBLE YOUR TEAM...");
    //Prompt user to select type of team member
    const teamQuestion = inquirer.prompt(
        {
            type: "list",
            name: "selectMemberType",
            message: "Which type of team member would you like to add next?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        });    
};

//Manager questions
const managerQuestions = [
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
]
//Engineer questions
const engineerQuestions = [
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

]
//Intern questions
const internQuestions = [
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

]


// //Prompt all team questions
// async function askManagerQuestions(managerQuestions) {
//     const managerAnswers = await inquirer.prompt(managerQuestions);
//     console.log("Manger added");
//     return managerAnswers;
// };
// async function askEngineerQuestions(engineerQuestions) {
//     const engineerAnswers = await inquirer.prompt(engineerQuestions);
//     console.log("Engineer added");
//     return engineerAnswers;
// };
// async function askInternQuestions(internQuestions) {
//     const internAnswers = await inquirer.prompt(internQuestions);
//     console.log("Intern added");
//     return internAnswers;
// };

// function init()
// .then(askTeamQuestion(teamQuestion)) {
//     return askManagerQuestions(managerQuestions);
// })


// function askTeamQuestion(teamQuestion)
// .then(askManagerQuestions(managerQuestions){
//     return askEngineerQuestions(engineerQuestions)
// }).then(askInternQuestions(internQuestions)) {
//     return console.log("Done!")
// }.catch((err) => throw error);


// const go = Promise.all([askManagerQuestions(managerQuestions), askEngineerQuestions(engineerQuestions), askInternQuestions(internQuestions)])
// .then((answers) => {
//     console.log(answers);
// });
  
// askManagerQuestions(managerQuestions);
// askEngineerQuestions(engineerQuestions);
// askInternQuestions(internQuestions);

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

// //Ask questions
// //What team members to add
// //Manager questions
// const askManagerQuestions = async (managerQuestions) => {
//     const answers = await inquirer.prompt(managerQuestions);
//     return answers;
// }

init();