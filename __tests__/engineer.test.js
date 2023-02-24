const Engineer = require("../lib/engineer");

describe("Engineer values", () => {
  it("Should give you back the name entered into the class", () => {
    let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
    let testName = newEmp.getName();

    expect(testName).toBe("ed");
  });

  it("Should give you back the ID entered into the class", () => {
    let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
    let testId = newEmp.getId();

    expect(testId).toBe("3");
  });

  it("Should give you back the email entered into the class", () => {
    let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
    let testEmail = newEmp.getEmail();

    expect(testEmail).toBe("ed@engineer.com");
  });

  it("Should give you back the GitHub username entered into the class", () => {
    let newEmp = new Engineer("ed", "3", "ed@engineer.com", "edengineer");
    let testGH = newEmp.getGithub();

    expect(testGH).toBe("edengineer");
  });

  it("Should give you back the employee role", () => {
    let newEmp = new Engineer("bob", "2", "bob@bob.com");
    let testRole = newEmp.getRole();

    expect(testRole).toBe("Engineer");
  });
});
