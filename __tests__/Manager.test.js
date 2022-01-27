const Manager = require("../lib/Manager");

test("return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Bob", 1, "bob@email.com", "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("create officeNumber", () => {
    const testValue = 111;
    const e = new Manager("Bob", 1, "bob@email.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("get officeNumber", () => {
    const testValue = 1;
    const e = new Manager("Bob", 1, "bob@email.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});