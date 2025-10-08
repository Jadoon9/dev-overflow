import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { ActionResponse } from "@/types/global";
import { RequestError } from "../http-errors";
import logger from "../logger";
import handleError from "./error";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

interface FetchOptions extends Omit<AxiosRequestConfig, "url" | "baseURL"> {
  timeout?: number;
}

export async function fetchHandler<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<ActionResponse<T>> {
  try {
    const response = await axiosInstance.request<ActionResponse<T>>({
      url: endpoint,
      ...options,
    });

    return response.data;
  } catch (err) {
    const error = err as AxiosError;

    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      logger.warn(`Request to ${endpoint} timed out`);
    } else if (error.response) {
      // Server responded with error status
      logger.error(
        `Error fetching ${endpoint}: ${error.response.status} - ${error.message}`
      );
      throw new RequestError(
        error.response.status,
        `HTTP error: ${error.response.status}`
      );
    } else if (error.request) {
      // Request made but no response received
      logger.error(`No response received for ${endpoint}: ${error.message}`);
    } else {
      // Error in request setup
      logger.error(`Error setting up request to ${endpoint}: ${error.message}`);
    }

    return handleError(error) as ActionResponse<T>;
  }
}
