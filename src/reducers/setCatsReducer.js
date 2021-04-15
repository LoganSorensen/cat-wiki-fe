import {
  FETCHING_BREEDS_START,
  FETCHING_BREEDS_SUCCESS,
  FETCHING_BREEDS_FAILURE,
} from "../actions/types";

const initialState = {
  breeds: [],
  error: "",
};

export const setCats = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BREEDS_START:
      return state;
    case FETCHING_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: action.payload,
      };
    case FETCHING_BREEDS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
