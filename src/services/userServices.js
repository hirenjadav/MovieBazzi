import axios from "axios";
import auth from "./authServices";

// const apiEndpoint = "http://localhost:8000/api/users/";
const apiEndpoint = "https://powerful-chamber-67957.herokuapp.com/api/users/";

const token = auth.getToken();

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-auth-token": token,
  },
};

// -----------------------------------------------------------------------------------
//ADMIN
// -----------------------------------------------------------------------------------

export async function getAllUserAsAdmin() {
  return await axios.get(apiEndpoint + "admin", {}, axiosConfig);
}

export async function deleteUserAsAdmin(userID) {
  return await axios.delete(
    apiEndpoint + "admin",
    { userID: userID },
    axiosConfig
  );
}

// -----------------------------------------------------------------------------------
//USER
// -----------------------------------------------------------------------------------

export async function getUserDetails() {
  return await axios.get(apiEndpoint + "me", {}, axiosConfig);
}

export async function addToWishlist(mediaType, mediaID) {
  return await axios.put(
    apiEndpoint + "me/wishlist",
    { mediaType: mediaType, mediaID: mediaID },
    axiosConfig
  );
}

export async function deleteFromWishlist(id) {
  return await axios.delete(
    apiEndpoint + "me/wishlist",
    { id: id },
    axiosConfig
  );
}

// -----------------------------------------------------------------------------------

const user = {
  getAllUserAsAdmin,
  deleteUserAsAdmin,
  getUserDetails,
  addToWishlist,
  deleteFromWishlist,
};

export default user;
