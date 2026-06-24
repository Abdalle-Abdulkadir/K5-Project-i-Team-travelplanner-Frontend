//Verify that the testing framework is working
test("first test", () => {
  expect(1 + 1).toBe(2);
});

// Verify that string comparison works
test("string comparison", () => {
  expect("Travel Planner").toBe("Travel Planner");
});
