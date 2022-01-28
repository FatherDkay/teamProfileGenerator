const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
// employee array
const employees = [];

function generatePage() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([
        {
            type: "input",
            message: "Team member name?",
            name: "name"
        },
        {
            type: "input",
            message: "Team member employee ID?",
            name: 'id'
        },
        {
            type: "input",
            message: "Team member email?",
            name: "email"
        },
        {
            type: "list",
            message: "Team member position?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        }
    ])
    .then(function({name,id, email, role}) {
        let roleInfo="";
        switch(role){
            case "Manager":
            roleInfo = "Office number";
            break;
            case "Engineer":
            roleInfo = "GitHub username";
            break;
            case "Intern":
                roleInfo = "School";
            break;
        }

        inquirer.prompt([
            {
                type: "input",
                message: `${roleInfo}?`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Add more team members?",
                choices: ["Yes", "No"],
                name: "moreMembers"
            }
        ])
        .then(function({roleInfo, moreMembers}) {
            let newMember; 
            switch(role){
                case "Manager":
                    newMember = new Manager(name, id, email, roleInfo);
                break;
                case "Engineer":
                    newMember = new Engineer(name, id, email, roleInfo);
                break;
                case "Intern":
                    newMember = new Intern(name, id, email, roleInfo);
                break;
            }

            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    return addMember();
                } else {
                    return finishHtml();
                }
            });
        });
    });
}

function startHtml() {
   const html =  `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta charset= "UTF-8">
    <meta name= "viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv= "X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
                <h1>The Team</h1>
            </span>
        </nav>
        <div class="container">
        <div class="row">
    `;
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(newMember) {
    return new Promise(function(resolve, reject) {
        const name = newMember.getName();
        const role = newMember.getRole();
        const id = newMember.getId();
        const email = newMember.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = newMember.getGitHub();
            data = `
            <div class="col-6">
            <div class="card" style="width: 20rem;">
                <h2 class= "card-header">${name}</h2>
                <div class="col card-header">
                    <h3>${role}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <a href= "mailto: ${email}" class="list-group-item">Email: ${email}</a>
                    <a href= "${gitHub}" class="list-group-item">GitHub: ${gitHub}</a>
                </ul>
            </div>
            </div>`;
        } else if (role === "Intern") {
            const school = newMember.getSchool();
            data = `
            <div class="col-6">
            <div class="card" style="width: 20rem;">
                <h2 class= "col card-header">${name}</h2>
                <div class="col card-header">
                    <h3>${role}</h3>
                </div>
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${id}</li>
                    <a href= "mailto: ${email}" class="list-group-item">Email: ${email}</a>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
            </div>`;
        } else {
            const officeNumber = newMember.getOfficeNumber();
            data = `
            <div class="col-6">
            <div class="card" style="width: 20rem;">
                <h2 class= "col card-header">${name}</h2>
                <div class="col card-header">
                    <h3>${role}</h3>
                </div>
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${id}</li>
                    <a href= "mailto: ${email}" class="list-group-item">Email: ${email}</a>
                    <li class="list-group-item">Office Number: ${officeNumber}</li>
                </ul>
            </div>
            </div>`;
        }
        console.log("Adding Team Member");
        fs.appendFile("./dist/team.html", data, function(err) {
            if(err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHtml() {
    const html = `
        </div>
        </div>
    </body>
    </html>`;

    fs.appendFile('./dist/team.html', html, function(err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}


generatePage();