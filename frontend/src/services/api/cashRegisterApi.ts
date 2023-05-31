import api from "./api";

export async function getBalance(token: string | null) {
  const response = await api.get("/cash-register/balance", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
