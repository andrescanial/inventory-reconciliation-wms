import CryptoJS from "https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/+esm";

export const USERS = [
  {
    email: "andres.canial@golocad.com",
    hash: CryptoJS.SHA256("Andresanadon123!").toString()
  },
  {
    email: "shielaferwelo@golocad.com",
    hash: CryptoJS.SHA256("Shielaferwelo123!").toString()
  },
  {
    email: "vincebaluyot22@golocad.com",
    hash: CryptoJS.SHA256("Vincebaluyot123!").toString()
  }
];

