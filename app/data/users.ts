import { User } from "../types/user";

let isUserLoggedIn = false;

export function getUserLoggedInStatus() {
  return isUserLoggedIn;
}
export function setUserLoggedInStatus(status: boolean) {
  isUserLoggedIn = status;
}

export const users: User[] = [
  /*
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password456",
  },
  */
];
