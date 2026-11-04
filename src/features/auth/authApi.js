import { API_MODE } from "../../lib/config";
import { createApiClient } from "../../lib/apiClient";
import { mockAuthApi } from "./mockAuthApi";

const isDevelopment = import.meta.env?.DEV === true;

if (API_MODE === "mock" && !isDevelopment) {
  throw new Error("Mock authentication is disabled in production.");
}

const client = createApiClient();

const liveAuthApi = {
  register: (data) =>
    client.request("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: (data) =>
    client.request("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  logout: () =>
    client.request("/auth/logout", {
      method: "POST",
    }),

  getCurrentUser: () =>
    client.request("/auth/me"),

  changePassword: (data) =>
    client.request("/auth/change-password", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

export const authApi =
  API_MODE === "mock" ? mockAuthApi : liveAuthApi;