const Engineer = require("../lib/Engineer");

test("return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bob", 1, "bob@email.com", "BobsGitHub", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("create gitHub", () => {
    const testValue = "BobsGitHub";
    const e = new Engineer("Bob", 1, "bob@email.com", testValue, "Engineer");
    expect(e.gitHub).toBe(testValue);
});

test("get gitHub", () => {
    const testValue = "BobsGitHub";
    const e = new Engineer("Bob", 1, "bob@email.com", testValue, "Engineer");
    expect(e.getGitHub()).toBe(testValue);
});