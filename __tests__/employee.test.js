const Employee = require("../lib/employee");
const { isTypedArray } = require("util/types");

describe("All employee values", () => {
  it("Should give you back the name entered into the class", () => {
    let newEmp = new Employee("bob", "2", "bob@bob.com");
    let testName = newEmp.getName();

    expect(testName).toBe("bob");
  });

  it("Should give you back the ID entered into the class", () => {
    let newEmp = new Employee("bob", "2", "bob@bob.com");
    let testId = newEmp.getId();

    expect(testId).toBe("2");
  });

  it("Should give you back the email entered into the class", () => {
    let newEmp = new Employee("bob", "2", "bob@bob.com");
    let testEmail = newEmp.getEmail();

    expect(testEmail).toBe("bob@bob.com");
  });

  it("Should give you back the employee role", () => {
    let newEmp = new Employee("bob", "2", "bob@bob.com");
    let testRole = newEmp.getRole();

    expect(testRole).toBe("Employee");
  });
});
