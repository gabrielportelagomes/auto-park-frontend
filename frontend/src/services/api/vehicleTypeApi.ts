import api from "./api";

export async function getAllVehicleTypes(token: string | null) {
  const response = await api.get("/vehicle-type/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
