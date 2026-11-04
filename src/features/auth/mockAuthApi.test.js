import { test } from "node:test";
import assert from "node:assert/strict";
import { mockAuthApi } from "./mockAuthApi.js";

test("student can register successfully", async () => {
  const result = await mockAuthApi.register({
    name: "Test Student",
    email: "student@example.com",
    password: "test12345",
  });

  assert.equal(result.user.name, "Test Student");
  assert.equal(result.user.email, "student@example.com");
  assert.equal(result.user.role, "student");
});

test("student can login successfully", async () => {
  const result = await mockAuthApi.login({
    email: "student@example.com",
    password: "test12345",
  });

  assert.equal(result.user.email, "student@example.com");
});

test("student can logout successfully", async () => {
  const result = await mockAuthApi.logout();

  assert.equal(result.success, true);

  const currentUser = await mockAuthApi.getCurrentUser();

  assert.equal(currentUser.user, null);
});
test("duplicate email registration is rejected", async () => {
  await assert.rejects(
    mockAuthApi.register({
      name: "Another Student",
      email: "student@example.com",
      password: "another123",
    }),
    /Email is already registered/
  );
});

test("login with incorrect password is rejected", async () => {
  await assert.rejects(
    mockAuthApi.login({
      email: "student@example.com",
      password: "wrongpassword",
    }),
    /Invalid email or password/
  );
});