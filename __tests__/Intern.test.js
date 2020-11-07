const Intern = require("../lib/Intern");

// testing if expect(received).toBe(expected)
// passed
test("check if can setup school", () => {
  const testSchool = "ABC University";
  const intern = new Intern("Intern 1", 11, "intern1@testing.com", testSchool);
  expect(intern.school).toBe(testSchool);
});
// passed
test("get role as intern", () => {
  const role = "Intern";
  const intern = new Intern(
    "Intern 2",
    12,
    "student2@testing.com",
    "XYZ University"
  );
  expect(intern.getRole()).toBe(role);
});
// passed
test("check if can setup getSchool function", () => {
  const testSchool = "OPQ University";
  const intern = new Intern("Intern 3", 13, "intern3@testing.com", testSchool);
  expect(intern.getSchool()).toBe(testSchool);
});
