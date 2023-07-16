import { useEffect, useState } from "react";
import { api } from "../services/axios";
import { User } from "../types/User";

export function useUser() {
  const [user, setUser] = useState<User | undefined>();

  async function fetchUser() {
    return await api.get<User>("users/Brenosalv");
  }

  useEffect(() => {
    fetchUser()
      .then((response) => response.data)
      .then(setUser)
      .catch((error) =>
        console.error(error)
      );
  }, []);

  return user;
}