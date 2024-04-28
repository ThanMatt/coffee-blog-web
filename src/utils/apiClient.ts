const BASE_URL = "http://api:8000/api";

export const apiClient = {
  get: async (path: string) => {
    const response = await fetch(`${BASE_URL}${path}`);
    const data = await response.json();
    return data;
  },
  delete: async (path: string) => {
    console.log(`${BASE_URL}${path}`);
    const response = await fetch(`${BASE_URL}${path}`, { method: "DELETE" });
    const data = await response.json();
    return data;
  },
  put: async (path: string, body: any) => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await response.json();
    return data;
  },
};
