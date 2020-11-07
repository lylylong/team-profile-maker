const Engineer = require("../lib/Engineer");

// testing if expect(received).toBe(expected)
// passed
test("check if can setup github", () => {
  const testGithub = "lylylong";
  const engineer = new Engineer("Engineer 1", 1, "111@testing.com", testGithub);
  expect(engineer.github).toBe(testGithub);
});
// passed
test("get role as engineer", () => {
  const role = "Engineer";
  const engineer = new Engineer("Engineer 1", 1, "111@testing.com", "lylylong");
  expect(engineer.getRole()).toBe(role);
});
// passed
test("check if can setup getGithub function", () => {
  const testGithub = "lylylong";
  const engineer = new Engineer("Engineer 1", 1, "111@testing.com", testGithub);
  expect(engineer.getGithub()).toBe(testGithub);
});
