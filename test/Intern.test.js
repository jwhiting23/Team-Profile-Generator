const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Temple University";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Test", 1, "test@test.com", "Temple University");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Temple University";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});