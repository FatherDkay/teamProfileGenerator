const Intern = require("../lib/Intern");

test("return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Bob", 1, "bob@email.com", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("create school", () => {
    const testValue = "UCLA Bootcamp";
    const e = new Intern("Bob", 1, "bob@email.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("get school", () => {
    const testValue = "UCLA Bootcamp";
    const e = new Intern("Bob", 1, "bob@email.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});