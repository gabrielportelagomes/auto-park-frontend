import api from "./api";

interface SignUpProps {
  email: string;
  password: string;
}

export async function signUp(body: SignUpProps) {
  const response = await api.post("/users", body);

  return response.data;
}
