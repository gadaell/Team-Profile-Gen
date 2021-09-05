const Engineer = require("../lib/engineer");

test("create engineer object", () => {
	const eng = new Engineer ("Ad", 4, "fakeemail@test.com", "test");

	expect(eng.name).toBe("Ad");
	expect(eng.id).toBe(4);
	expect(eng.email).toBe("fakeemail@test.com");
	expect(eng.gitHub).toBe("test");
});

test("returns github", () => {
	const eng = new Engineer("Ad", 4, "fakeemail@test.com", "test");

	expect(eng.getGitHub()).toEqual(eng.gitHub);
});