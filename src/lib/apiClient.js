import { API_BASE_URL } from "./config.js";

export class ApiError extends Error {
  constructor(message, status, code, fields) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
  }
}

export function createApiClient({
  baseUrl = API_BASE_URL,
  fetchImpl = fetch,
  onUnauthorized = () => {},
  timeout = 10000,
} = {}) {
  async function request(path, options = {}) {
    const controller = new AbortController();

    const timeoutId = setTimeout(
      () => controller.abort(),
      timeout
    );

    try {
      const response = await fetchImpl(
        `${baseUrl}${path}`,
        {
          ...options,
          credentials: "include",
          signal: controller.signal,
          headers: {
            ...(options.body
              ? { "Content-Type": "application/json" }
              : {}),
            ...options.headers,
          },
        }
      );

      const contentType =
        response.headers?.get("content-type") || "";

      const data =
        response.status === 204
          ? null
          : contentType.includes("application/json")
            ? await response.json()
            : null;

      if (response.status === 401) {
        onUnauthorized();
      }

      if (!response.ok) {
        throw new ApiError(
          data?.error?.message || "Request failed",
          response.status,
          data?.error?.code || "API_ERROR",
          data?.error?.fields
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      if (error.name === "AbortError") {
        throw new ApiError(
          "Request timed out. Please try again.",
          0,
          "TIMEOUT"
        );
      }

      throw new ApiError(
        "Network error. Please try again.",
        0,
        "NETWORK_ERROR"
      );
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return { request };
}