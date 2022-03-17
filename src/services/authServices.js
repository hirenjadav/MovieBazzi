import axios from "axios";
import jwtDecode from "jwt-decode";

// const apiEndpoint = "http://localhost:8000/api/users/";
const apiEndpoint = "https://powerful-chamber-67957.herokuapp.com/api/users/";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export async function signin(loginData) {
  return await axios.post(apiEndpoint + "login", loginData, axiosConfig);
}

export async function signout(registerData) {
  return await axios.post(apiEndpoint + "register", registerData, axiosConfig);
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
