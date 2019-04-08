import axios from "axios";
import { FETCH_USER, SUBMIT_SURVEY } from "../actions/index";

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/current_user");

    dispatch({
      type: FETCH_USER,
      currentUser: res.data
    });
  } catch (error) {}
};

export const handleToken = token => async dispatch => {
  try {
    const res = await axios.post("/api/stripe", token);

    dispatch({
      type: FETCH_USER,
      currentUser: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post("/api/surveys", values);

    history.push("/surveys");

    dispatch({
      type: SUBMIT_SURVEY,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
