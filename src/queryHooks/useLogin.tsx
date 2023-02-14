import { loginUser } from "@/utils/network";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  clearStoredUser,
  storeUserToLocalStorage,
  storedUserToken,
} from "../utils/storeUser";
import { IUserLogin, IUserRegData } from "@/utils/types";

// interface UseAuth {
//   signup: (userData: IUserRegData) => Promise<void>;
//   login: (userData: IUserLogin) => Promise<void>;
//   signout: () => void;
// }

// type UserResponse = { user: IUserRegData };
// type ErrorResponse = { message: string };
// type AuthResponseType = UserResponse | ErrorResponse;

function useLogin(userData: IUserLogin) {
  const { data: user, isLoading } = useQuery(
    ["login"],
    () => loginUser(userData),
    {
      onSuccess: (received) => {
        if (!received) {
          clearStoredUser();
        } else {
          let loginTime = Date.now();
          storedUserToken(user?.token);
          storeUserToLocalStorage(user);
        }
      },
    }
  );

  return user;
}

export default useLogin;
