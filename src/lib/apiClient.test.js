import { test } from "node:test";
import assert from "node:assert/strict";
import { createApiClient } from "./apiClient.js";

test("API client sends cookies and reads JSON", async () => {
  let capturedOptions;

  const fakeFetch = async (url, options) => {
    capturedOptions = options;

    return {
      status: 200,
      ok: true,
      headers: {
        get: () => "application/json",
      },
      json: async () => ({
        user: { id: "1", name: "Student" },
      }),
    };
  };

  const client = createApiClient({
    baseUrl: "/api/v1",
    fetchImpl: fakeFetch,
  });

  const result = await client.request("/auth/me");

  assert.equal(capturedOptions.credentials, "include");
  assert.equal(result.user.name, "Student");
});

test("API client handles unauthorized response", async () => {
  let unauthorizedCalled = false;

  const fakeFetch = async () => ({
    status: 401,
    ok: false,
    headers: {
      get: () => "application/json",
    },
    json: async () => ({
      error: {
        message: "Unauthorized",
        code: "UNAUTHORIZED",
      },
    }),
  });

  const client = createApiClient({
    fetchImpl: fakeFetch,
    onUnauthorized: () => {
      unauthorizedCalled = true;
    },
  });

  await assert.rejects(
    client.request("/auth/me"),
    (error) => error.status === 401
  );

  assert.equal(unauthorizedCalled, true);
});