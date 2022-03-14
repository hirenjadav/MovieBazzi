import axios from "axios";
import auth from "./authServices";

const currentUser = auth.getCurrentUser();
const token = auth.getToken();

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-auth-token": token,
  },
};

export async function giveReview(rating, review, mediaType, mediaID) {
  const reviewData = {
    rating: rating,
    review: review,
    userID: currentUser._id,
    userName: currentUser.name,
    mediaType: mediaType,
    mediaID: mediaID,
  };

  return await axios.post(
    "http://localhost:8000/api/users/login",
    reviewData,
    axiosConfig
  );
}

const review = {
  giveReview,
};

export default review;
