const Employee = require("../lib/employee");
const { expect } = require("@jest/globals");

test("creates an employees object", () => {
    const e = new Employee ("Ad", 4, "fakeemail@test.com");

    	expect(e.name).toBe("Ad");
	    expect(e.id).toBe(4);
	    expect(e.email).toBe("fakeemail@test.com");
});
test("return employee name", () => {
    const e = new Employee ("Ad", 4, "fakeemail@test.com");

    expect(e.getName()).toEqual(expect.stringContaining(e.name));
});
test("return employee id", () => {
    const e = new Employee ("Ad", 4, "fakeemail@test.com");

    expect(e.getId()).toBe(e.id);
});
test("return employee email", () => {
    const e = new Employee ("Ad", 4, "fakeemail@test.com");

    expect(e.getEmail()).toEqual(expect.stringContaining(e.email));
});
test("retrieve employee role", () => {
    const e = new Employee ("Ad", 4, "fakeemail@test.com");

    expect(e.getRole()).toEqual(expect.any(String));
});