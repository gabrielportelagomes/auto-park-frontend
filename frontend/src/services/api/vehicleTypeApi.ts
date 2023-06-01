import api from "./api";

export async function getAllVehicleTypes(token: string | null) {
  const response = await api.get("/vehicle-type/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export interface CashItem {
  vehicle_type: string;
  hour_hate: number;
}

export async function postVehicleType(token: string | null, body: CashItem) {
  const response = await api.post("/vehicle-type", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
