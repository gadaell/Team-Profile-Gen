// constant variables & packages
const fs = require("fs");
const inquirer = require("inquirer");
// variables that are link to js files in lib folder.
const Manager = require ("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require ("./lib/intern");
// empty array to hold objects for the number of employees
const employees = [];

//questions set up for manager once prompted by node
//validate function prevents the user from moving on from prompt question without an answer.
//validate funtion is not needed for overall function to work.
//Be specific with name input instead of just putting "Name: 'Name'", could cause problems
//Refer back to inquirer documentation on question types to understand the type of question that is prompted by node once run 

const managerQuestions = () => {
    return inquirer.prompt([{
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
.then((data) => {
    const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
    );
    employees.push(manager);
    console.log("Manager information has been added");
    });
};