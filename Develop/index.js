//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// const fileName = ".\dist\index.html";

const Employee = require("../Develop/lib/Employee.js");
const Engineer = require("../Develop/lib/Engineer.js");
const Intern = require("../Develop/lib/Intern.js");
const Manager = require("../Develop/lib/Manager.js");

const generateHtml = data => `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="team-heading">
        <h1>My Team</h1>
    </header>
    <main class="team-area">
        <div class="employee-card" id="manager">
            <h2>${data.managerName} Manager</h2>
            <div class="card-body">
                <div class="list-group-container">
                    <p class="list-group-item">
                        ID: ${data.managerId}
                    </p>
                    <p class="list-group-item">
                        Email: ${data.managerEmail}
                    </p>
                    <p class="list-group-item">
                        Office Number: ${data.managerOfficeNumber}
                    </p>
                </div>
            </div>
        </div>
        <div class="employee-card" id="engineer">
            <h2>${data.engineerName} Engineer</h2>
            <div class="card-body">
                <p class="list-group-item">
                    ID: ${data.engineerId}
                </p>
                <p class="list-group-item">
                    Email: ${data.engineerEmail}
                </p>
                <p class="list-group-item">
                    GitHub: ${data.engineerGitHub}
                </p>
            </div>
        </div>
        <div class="employee-card" id="intern">
            <h2>${data.internName} Intern</h2>
            <div class="card-body">
                <p class="list-group-item">
                    ID: ${data.internId}
                </p>
                <p class="list-group-item">
                    Email: ${data.internEmail}
                </p>
                <p class="list-group-item">
                    School: ${data.internSchool}
                </p>
            </div>
        </div>
    </main>

    <script src="../index.js"></script>`;

//CLI Prompts
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
    ])
    .then ((data) => {
        fs.appendFile("index.html", generateHtml(data), (err) =>
        err ? console.error(err) : console.log("Your team has beena assembled!"));
    });