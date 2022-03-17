import axios from "axios";
import auth from "./authServices";

// const apiEndpoint = "http://localhost:8000/api/reviews/";
const apiEndpoint = "https://powerful-chamber-67957.herokuapp.com/api/reviews/";

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

export async function getAllReviewAsAdmin() {
  return await axios.get(apiEndpoint + "admin", {}, axiosConfig);
}

export async function deleteReviewAsAdmin() {
  return await axios.delete(apiEndpoint + "admin", {}, axiosConfig);
}

// -----------------------------------------------------------------------------------
//USER
// -----------------------------------------------------------------------------------

export async function getAllReviewAsUser() {
  return await axios.get(apiEndpoint + "me/getall", {}, axiosConfig);
}

export async function deleteReviewAsUser(reviewID) {
  return await axios.delete(
    apiEndpoint + "me/delete",
    { reviewID: reviewID },
    axiosConfig
  );
}

export async function giveReview(rating, review, mediaType, mediaID) {
  const reviewData = {
    rating: rating,
    review: review,
    mediaType: mediaType,
    mediaID: mediaID,
  };

  return await axios.post(apiEndpoint + "me/give", reviewData, axiosConfig);
}

export async function giveLike(reviewID) {
  return await axios.put(
    apiEndpoint + "me/like",
    { reviewID: reviewID },
    axiosConfig
  );
}

export async function giveDislike(reviewID) {
  return await axios.put(
    apiEndpoint + "me/dislike",
    { reviewID: reviewID },
    axiosConfig
  );
}

export async function giveReport(reviewID, reason) {
  return await axios.put(
    apiEndpoint + "me/report",
    { reviewID: reviewID, reason: reason },
    axiosConfig
  );
}

const review = {
  getAllReviewAsAdmin,
  deleteReviewAsAdmin,
  getAllReviewAsUser,
  deleteReviewAsUser,
  giveReview,
  giveLike,
  giveDislike,
  giveReport,
};

export default review;
