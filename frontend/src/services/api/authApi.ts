import api from "./api";

interface SignInProps {
  email: string;
  password: string;
}

export async function signIn(body: SignInProps) {
  const response = await api.post("/auth/sign-in", body);

  return response.data;
}
