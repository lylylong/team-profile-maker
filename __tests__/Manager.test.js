const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// testing if expect(received).toBe(expected)
// passed
test("check if can setup office number", () => {
  const testOfficeNumber = 999;
  const manager = new Manager(
    "Manager",
    1,
    "manager@testing.com",
    testOfficeNumber
  );
  expect(manager.officeNumber).toBe(testOfficeNumber);
});
// passed
test("get role as manager", () => {
  const role = "Manager";
  const manager = new Manager("Manager", 1, "manager@testing.com", 999);
  expect(manager.getRole()).toBe(role);
});
// passed
test("check if can setup getOfficeNumber function", () => {
  const testOfficeNumber = 999;
  const manager = new Manager(
    "Manager",
    1,
    "manager@testing.com",
    testOfficeNumber
  );
  expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
});
