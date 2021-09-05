// constant variables & packages
const fs = require("fs");
const inquirer = require("inquirer");
// variables that are link to js files in lib folder.
const Manager = require ("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require ("../lib/intern");
let htmlString = "";

const generateTeam = (employeeArray) => {
    employeeArray.forEach((element) => {
        if (element instanceof Manager){
            htmlString += `
        <div class = "card m-2 border border-dark" style="width: 18rem">
        <div class = "card-header font-weight-bold">
        			<p class="card-title display-5">${element.getName()}</p>
			<p class="card-text employee-title"><span><i class="fas fa-coffee"></i></span> Manager</p>
		</div>
		<div class="card-body bg-lightGrey">
		<ul class="list-group list-group-flush m-3 border">
			<li class="list-group-item">ID: ${element.getId()}</li>
			<li class="list-group-item">
				Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a>
			</li>
			<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>
		</ul>
		</div>
	</div>`;
        }else if (element instanceof Engineer){
            htmlString += `<div class="card m-2 border border-dark" style="width: 18rem">
                        <div class="card-header font-weight-bold">
                        <p class="card-title display-5">${element.getName()}</p>
			<p class="card-text employee-title"><span><i class="fas fa-glasses"></i></span> Engineer</p>
		</div>
		<div class="card-body bg-lightGrey">
		<ul class="list-group list-group-flush m-3 border">
			<li class="list-group-item">ID: ${element.getId()}</li>
			<li class="list-group-item">
				Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a>
			</li>
			<li class="list-group-item">GitHub: <a href="https://github.com/${element.getGitHub()}" target="_blank">${element.getGitHub()}</a></li>
		</ul>
		</div>
	</div>
	`;
        }else if (element instanceof Intern){
          htmlString += `<div class="card m-2 border border-dark" style="width: 18rem">
            <div class="card-header font-weight-bold">
                <p class="card-title display-5">${element.getName()}</p>
			<p class="card-text employee-title"><span><i class="fas fa-user-graduate"></i></span> Intern</p>
		</div>
		<div class="card-body bg-lightGrey">
		<ul class="list-group list-group-flush m-3 border">
			<li class="list-group-item">ID: ${element.getId()}</li>
			<li class="list-group-item">
				Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a>
			</li>
			<li class="list-group-item">School: ${element.getSchool()}</li>
		</ul>
		</div>
	</div>
	`;  
        }
    });

    createHTMLFile(htmlString);
};

const createHTMLFile = (htmlString) => {
  let htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team-Keeper</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <header>
    <nav
      class="
        navbar navbar-light
        bg-primary
        text-uppercase
        font-weight-bolder
        border border-dark
      "
    >
      <a class="navbar-brand">
        <i class="fa fa-users" aria-hidden="true"></i>
        My Team
      </a>
    </nav>
  </header>
    <body class="bg-secondary">
      <div class="container-fluid">
        <div class="justify-content-center">
          <div class="row d-flex flex-wrap justify-content-center">
            ${htmlString}
          </div>
        </div>
      </div>
    </body>
  </html>`;
  //Writing the htmlTemplate to the dist folder as the new-team.html file.
  fs.writeFile("./output/create-team.html", htmlTemplate, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your file is in the output folder.");
  });
};

module.exports = generateTeam;