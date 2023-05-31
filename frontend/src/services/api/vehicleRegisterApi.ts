import api from "./api";

export async function getActiveRegisters(token: string | null) {
  const response = await api.get("/vehicle-register/active", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

interface PostVehicleRegisterBody {
  plate_number: string;
  vehicle_type_id?: number;
}

export async function postVehicleRegister(
  token: string | null,
  body: PostVehicleRegisterBody
) {
  const response = await api.post("/vehicle-register", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
