import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  DELETE_EDU,
  DELETE_EXP,
  DELETE_FAIL,
  GET_PROFILES,
  ADD_REPOS,
  FAIL_REPO,
} from "../action/types";
const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  isLoading: true,
  error: {},
};
export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAIL_REPO:
      return {
        ...state,
        repos: "git hub server error",
        isLoading: false,
      };
    case ADD_REPOS:
      return {
        ...state,
        isLoading: false,
        repos: payload,
      };

    case GET_PROFILES:
      return {
        ...state,
        isLoading: false,
        profiles: payload,
        error: {},
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
    case DELETE_EDU:
    case DELETE_EXP:
      return {
        ...state,
        isLoading: false,
        profile: payload,
        error: {},
      };
    case PROFILE_ERROR:
    case DELETE_FAIL:
      return {
        ...state,
        profile: null,
        error: payload,
        isLoading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        isLoading: false,
      };
    default:
      return state;
  }
};
