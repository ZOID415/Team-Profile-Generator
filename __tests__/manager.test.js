const Manager = require("../lib/manager");

describe("All employee values", () => {
  it("Should give you back the name entered into the class", () => {
    let newEmp = new Manager("manny", "5", "manny@manager.com", "801");
    let testName = newEmp.getName();

    expect(testName).toBe("manny");
  });

  it("Should give you back the ID entered into the class", () => {
    let newEmp = new Manager("manny", "5", "manny@manager.com", "801");
    let testId = newEmp.getId();

    expect(testId).toBe("5");
  });

  it("Should give you back the email entered into the class", () => {
    let newEmp = new Manager("manny", "5", "manny@manager.com", "801");
    let testEmail = newEmp.getEmail();

    expect(testEmail).toBe("manny@manager.com");
  });

  it("Should give you back the office number entered into the class", () => {
    let newEmp = new Manager("manny", "5", "manny@manager.com", "801");
    let testOffice = newEmp.getOfficeNumber();

    expect(testOffice).toBe("801");
  });

  it("Should give you back the employee role", () => {
    let newEmp = new Manager("bob", "2", "bob@bob.com");
    let testRole = newEmp.getRole();

    expect(testRole).toBe("Manager");
  });
});
