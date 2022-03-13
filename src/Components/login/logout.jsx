import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../services/authServices";

function Logout(props) {
  let navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate("/");
  });

  return null;
}

export default Logout;
