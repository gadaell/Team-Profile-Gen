const Intern = require("../lib/intern");

test("create intern object", () => {
	const int = new Intern("Ad", 4, "fakeemail@test.com","school");

	expect(int.name).toBe("Ad");
	expect(int.id).toBe(4);
	expect(int.email).toBe("fakeemail@test.com");
	expect(int.school).toBe("school");
});