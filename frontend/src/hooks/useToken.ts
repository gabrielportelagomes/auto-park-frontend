import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function useToken() {
  const { userData } = useContext(UserContext);

  const token = userData;

  return token;
}
