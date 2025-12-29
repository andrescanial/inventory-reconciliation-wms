import CryptoJS from "https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/+esm";
import { USERS } from "../config/users.js";

export function login(email, password) {
  const hash = CryptoJS.SHA256(password).toString();
  return USERS.find(
    u => u.email === email && u.hash === hash
  );
}

