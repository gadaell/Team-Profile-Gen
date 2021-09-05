// Must have in order to run class. Must link to employee.js
const  Employee = require ("../lib/employee.js");

class Intern extends Employee {
    constructor(name, id, email, school){
//super() recalls to parent class in employee.js. Must call in order to access properties and methods
        super(name, id, email);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getschool(){
        return this.school;
    }
}
// export Intern class to main application
module.exports = Intern;