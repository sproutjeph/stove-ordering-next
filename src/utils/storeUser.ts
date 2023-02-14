import { IUserRegData } from "./types";

const USER_LOCALSTORAGE_KEY = "stove_ordering_user";
const USER_LOCALSTORAGE_TOKEN = "stove_ordering_user_token";

export function getStoredUser(): IUserRegData | null {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  return storedUser ? JSON.parse(storedUser) : null;
}

export function storeUserToLocalStorage(user: any): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}

export function storedUserToken(token: string) {
  localStorage.setItem(USER_LOCALSTORAGE_TOKEN, token);
}
