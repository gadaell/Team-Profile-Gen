const Manager = require("../lib/manager");

test("creates manager object", () => {
	const man = new Manager("Ad", 4, "fakeemail@test.com", 100);

	expect(man.name).toBe("Ad");
	expect(man.id).toBe(4);
	expect(man.email).toBe("fakeemail@test.com");
	expect(man.officeNumber).toBe(100);
});