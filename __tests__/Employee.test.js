const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");

// testing if expect(received).toBe(expected)
// passed
test("instance employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});
// passed
test("check if can setup employee name", () => {
  const testName = "Employee A";
  const employee = new Employee(testName);
  expect(employee.name).toBe(testName);
});
// passed
test("check if can setup employee id", () => {
  const testId = 2;
  const employee = new Employee("Employee B", testId);
  expect(employee.id).toBe(testId);
});
// passed
test("check if can setup employee email", () => {
  const testEmail = "ccc@testing.com";
  const employee = new Employee("Employee C", 3, testEmail);
  expect(employee.email).toBe(testEmail);
});
// passed
test("check if can setup getName function", () => {
  const testName = "Employee D";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});
// passed
test("check if can setup getId function", () => {
  const testId = 5;
  const employee = new Employee("Employee E", testId);
  expect(employee.getId()).toBe(testId);
});
// passed
test("check if can setup getEmail function", () => {
  const testEmail = "fff@testing.com";
  const employee = new Employee("Employee F", 6, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});
// passed
test("get role as employee", () => {
  const role = "Employee";
  const employee = new Employee("Employee G", 7, "ggg@testing.com");
  expect(employee.getRole()).toBe(role);
});
