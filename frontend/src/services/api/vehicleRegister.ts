import api from "./api";

export async function getActiveRegisters(token: string | null) {
  const response = await api.get("/vehicle-register/active", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
