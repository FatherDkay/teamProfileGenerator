const Employee = require('../lib/Employee.js');

test("return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Bob", 1, "bob@email.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test('create name', () => {
    const name = "Bob";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("get name", () => {
    const testValue = "Bob";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("create id", () => {
    const testValue = 1;
    const e = new Employee("Bob", testValue);
    expect(e.id).toBe(testValue);
});

test("get id", () => {
    const testValue = 1;
    const e = new Employee("Bob", testValue);
    expect(e.getId()).toBe(testValue);
});

test ("create email", () => {
    const testValue = "bob@email.com";
    const e = new Employee("Bob", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("get email", () => {
    const testValue = "bob@email.com";
    const e = new Employee("Bob", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
