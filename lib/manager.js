// Must have in order to run class. Must link to employee.js
const  Employee = require ("../lib/employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
//super() recalls to parent class in employee.js. Must call in order to access properties and methods
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
// export Manager class to main application
module.exports = Manager; 