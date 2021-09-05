// Must have in order to run class. Must link to employee.js
const  Employee = require ("../lib/employee.js");
// information require for Engineer class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
//super() recalls to parent class in employee.js. Must call in order to access properties and methods
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}
// export Engineer class to main application
module.exports = Engineer;