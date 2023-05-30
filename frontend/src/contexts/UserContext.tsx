import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export interface UserKeyContextType {
  userData: string | null;
  setUserData: (userData: string | null) => void;
}

const UserContext = createContext<UserKeyContextType>({
  userData: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserData: (userData: string | null) => {},
});

export default UserContext;

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useLocalStorage<string | null>(
    "userData",
    null
  );

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
