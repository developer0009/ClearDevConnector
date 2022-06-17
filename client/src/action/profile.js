import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  DELETE_EDU,
  DELETE_EXP,
  DELETE_FAIL,
  DELETE_ACCOUNT,
  CLEAR_PROFILE,
  GET_PROFILES,
  ADD_REPOS,
  FAIL_REPO,
} from "./types";
export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const profile = await axios.get("http://localhost:5000/api/profile/me");
      dispatch({
        type: GET_PROFILE,
        payload: profile.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.data.msg, status: err.response.status },
      });
    }
  };
};
export const createProfile = (formData, navigate, edit = false) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/profile",
        formData
      );
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      dispatch(
        edit
          ? setAlert("successfully updated profile!!", "success")
          : setAlert("successfully created profile!!", "success")
      );
      if (!edit) {
        navigate("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
export const addExperience = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/profile/experience",
        formData
      );

      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
      dispatch(setAlert("experience added !!!", "success"));
      navigate("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
export const addEducation = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/profile/education",
        formData
      );
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
      dispatch(setAlert("education added !!!", "success"));
      navigate("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
export const deleteExp = (exp_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/profile/experience/${exp_id}`
      );
      dispatch({
        type: DELETE_EXP,
        payload: res.data,
      });
      dispatch(setAlert("success deleting!! ", "success"));
    } catch (err) {
      dispatch({
        type: DELETE_FAIL,
        payload: err.response.data,
      });
      dispatch(setAlert("deletion failed!!", "danger"));
    }
  };
};

export const deleteEdu = (edu_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/profile/education/${edu_id}`
      );
      dispatch({
        type: DELETE_EDU,
        payload: res.data,
      });
      dispatch(setAlert("success deleting!!", "success"));
    } catch (err) {
      dispatch({
        type: DELETE_FAIL,
        payload: err.response.data,
      });
      dispatch(setAlert("deletion failed!!", "danger"));
    }
  };
};
export const deleteAccount = () => {
  return async (dispatch) => {
    if (window.confirm("are you sure????")) {
      try {
        await axios.delete("http://localhost:5000/api/profile");

        dispatch(setAlert("Your account has been permanently deleted"));
        dispatch({ type: DELETE_ACCOUNT });
        dispatch({ type: CLEAR_PROFILE });
      } catch (err) {
        dispatch({ type: DELETE_FAIL });
      }
    }
  };
};
export const getProfiles = () => {
  return async (dispatch) => {
    try {
      const profiles = await axios.get("http://localhost:5000/api/profile");
      dispatch({
        type: GET_PROFILES,
        payload: profiles.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
      });
    }
  };
};
export const getProfileById = (user_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/profile/user/" + user_id
      );
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: PROFILE_ERROR });
    }
  };
};
export const getRepos = (username) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/profile/github/" + username
      );
      // console.log
      dispatch({
        type: ADD_REPOS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FAIL_REPO,
      });
      dispatch(setAlert("github server error!!!", "danger"));
    }
  };
};
//what ever we delete un database we should also remove from redux
