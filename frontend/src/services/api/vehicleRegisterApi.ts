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

export async function getRegistersByDate(token: string | null, date: string) {
  const response = await api.get(`/vehicle-register/date/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllRegisters(token: string | null) {
  const response = await api.get("/vehicle-register/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function patchVehicleRegister(token: string | null, id: number) {
  const response = await api.patch(`/vehicle-register/${id}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
