// constant variables & packages
const fs = require("fs");
const inquirer = require("inquirer");
// variables that are link to js files in lib folder.
const Manager = require ("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require ("./lib/intern");
// empty array to hold objects for the number of employees
const employeeArray = [];
// function to add additional members to team
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployeePrompt",
            message: "Would you like to add another employee?"
        }
    ])
    .then((answer) => {
        if(answer.addEmployeePrompt === true) {
            return inquirer.prompt([
                {
                    type: "list",
                    name: "addEmployeeRole",
                    message: "Are you adding an engineer or intern?",
                    choices: ["Engineer", "Intern"],
                },
            ])
            .then((answer) => {
                if(answer.addEmployeeRole === "Engineer"){
                    engineerQuestions();
                }else if(answer.addEmployeeRole === "Intern"){
                    internQuestions();
                }
            });
        }else{
            generateTeam(employeeArray);
        }
    });
};
//questions set up for manager once prompted by node
//validate function prevents the user from moving on from prompt question without an answer.
//validate funtion is not needed for overall function to work.
//Be specific with name input instead of just putting "Name: 'Name'", could cause problems
//Refer back to inquirer documentation on question types to understand the type of question that is prompted by node once run 

const managerQuestions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please provide the name of the manager who is on the team.",
        validate: (managerName) => {
        if (managerName) {
            return true;
        }else{
            console.log("You must enter a manager name.");
            return false;
            }
        },
    },
    {
        type: "input",
        name: "managerId",
        message: "Please provide the id number of your manager.",
        validate: (managerId) => {
            if (managerId){
                return true;
            }else{
                console.log("You must enter a manager's id number.");
                return false;
            }
        },

    },    
    {
        type: "input",
        name: "managerEmail",
        message: "Please provide your manager's email address.",
        validate: managerEmail => {
            if (managerEmail){
                return true;
            }else{
                console.log("You must enter the manager's email address.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please provide your manager's office number.",
        validate: managerOfficeNumber => {
            if (managerOfficeNumber){
                    return true;
                }else{
                    console.log("You must enter the office number of your manager.");
                    return false;
                }
            },
    },
])
//Takes the data from prompted questions and format it into manager object
.then((data) => {
    const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
    );
//push the manager object into the employeeArray 
    employeeArray.push(manager);
//to help verify that the data was inputted correctly in overall function
    console.log("Manager information has been added");
    })
// add another person function once created
    .then(addEmployee);
};

//Engineer Questions

const engineerQuestions = () => {
    return inquirer.prompt([
    {
            type: "input",
            name: "engineerName",
            message: "Please provide the name of the engineer who is on the team.",
            validate: (engineerName) => {
            if (engineerName) {
                 return true;
             }else{
            console.log("You must enter the name of the engineer.");
                 return false;
            }
        },
    },
    {
            type: "input",
            name: "engineerId",
            message: "Please provide the id number of your engineer.",
            validate: (engineerId) => {
            if (engineerId) {
                 return true;
             }else{
            console.log("You must enter a engineer's id number.");
                 return false;
            }
        },
    },
    {
            type: "input",
            name: "engineerEmail",
            message: "Please provide your engineer's email address.",
            validate: (engineerEmail) => {
            if (engineerEmail) {
                 return true;
             }else{
            console.log("You must enter the engineer's email address.");
                 return false;
            }
        },
    },
    {
            type: "input",
            name: "gitHub",
            message: "Please provide the username of the engineer's github account.",
            validate: (gitHub) => {
            if (gitHub) {
                 return true;
             }else{
            console.log("You must enter the username of the engineer's github account.");
                 return false;
            }
        },
    },
]) 
    //Taking answers and building it into new Engineer object 
    .then((engineerAnswers) => {
        const newEngineer = new Engineer(
            engineerAnswers.engineerName,
            engineerAnswers.engineerId,
            engineerAnswers.engineerEmail,
            engineerAnswers.gitHub 
        );
        // pushing engineer object into employeeArray
        employeeArray.push(newEngineer);
        console.log("New engineer has been added");
    }).then(addEmployee);
};
//Intern Questions

const internQuestions = () => {
    return inquirer.prompt([
    {
            type: "input",
            name: "internName",
            message: "Please provide the name of the intern who is on the team.",
            validate: (internName) => {
            if (internName) {
                 return true;
             }else{
            console.log("You must enter the name of the intern.");
                 return false;
            }
        },
    },
    {
            type: "input",
            name: "internId",
            message: "Please provide the id number of your intern.",
            validate: (internId) => {
            if (internId) {
                 return true;
             }else{
            console.log("You must enter the intern's id number.");
                 return false;
            }
        },
    },
    {
            type: "input",
            name: "internEmail",
            message: "Please provide the intern's email address.",
            validate: (internEmail) => {
            if (internEmail) {
                 return true;
             }else{
            console.log("You must enter the intern's email address.");
                 return false;
            }
        },
    },
    {
            type: "input",
            name: "school",
            message: "Please provide the school of the intern.",
            validate: (school) => {
            if (school) {
                 return true;
             }else{
            console.log("You must enter the school of the intern.");
                 return false;
            }
        },
    },
]) 
    //Taking answers and building it into new Intern object 
    .then((internAnswers) => {
        const newIntern = new Intern(
            internAnswers.internName,
            internAnswers.internId,
            internAnswers.internEmail,
            internAnswers.school
        );
        // pushing intern object into employeeArray
        employeeArray.push(newIntern);
        console.log("New intern has been added");
    }).then(addEmployee);
};





managerQuestions();