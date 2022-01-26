const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob');
  
    expect(employee.name).toBe('Bob');
    expect(employee.email).toEqual(expect.any(Number));
  });