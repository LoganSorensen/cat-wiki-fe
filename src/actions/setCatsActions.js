import axios from "axios";
import {
  FETCHING_BREEDS_START,
  FETCHING_BREEDS_SUCCESS,
  FETCHING_BREEDS_FAILURE,
} from "./types";

export const fetchBreeds = () => (dispatch) => {
  dispatch({ type: FETCHING_BREEDS_START });
  axios
    .get("http://localhost:5000/cats")
    .then((res) => {
      // console.log(res)
      dispatch({ type: FETCHING_BREEDS_SUCCESS, payload: res.data.cats });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_BREEDS_FAILURE, payload: err });
    });
};
