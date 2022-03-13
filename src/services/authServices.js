import axios from "axios";
import jwtDecode from "jwt-decode";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export async function signin(loginData) {
  return await axios.post(
    "http://localhost:8000/api/users/login",
    loginData,
    axiosConfig
  );
}

export async function signout(registerData) {
  return await axios.post(
    "http://localhost:8000/api/users/register",
    registerData,
    axiosConfig
  );
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = getToken();
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(jwt) {
  localStorage.setItem("token", jwt);
}

const auth = {
  signin,
  signout,
  logout,
  getCurrentUser,
  getToken,
  setToken,
};

export default auth;
