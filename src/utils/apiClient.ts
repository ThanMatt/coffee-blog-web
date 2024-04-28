import axios from "axios";
import { headers } from "next/headers";

const BASE_URL = "http://api:8000/api";

export const apiClient = {
  get: async (path: string, params?: any) => {
    const response = await axios.get(`${BASE_URL}${path}`, { params });
    return response.data;
  },
  delete: async (path: string) => {
    console.log(`${BASE_URL}${path}`);
    const response = await axios.delete(`${BASE_URL}${path}`, {
      method: "DELETE",
    });
    return response.data;
  },
  put: async (path: string, body: any) => {
    const response = await axios.put(`${BASE_URL}${path}`, {
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
};
