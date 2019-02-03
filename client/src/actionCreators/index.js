import axios from "axios";
import { FETCH_USER } from "../actions/index";

const fetchUser = () => {
  return async dispatch => {
    try {
      const currentUser = await axios.get("/api/current_user");

      dispatch({
        type: FETCH_USER,
        currentUser
      });
    } catch (error) {}
  };
};
