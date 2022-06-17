import axios from "axios";
import { setAlert } from "./alert";
import {
  DELETE_POST,
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";
import { UPDATE_LIKES } from "./types";
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/post");
      console.log(res.data);
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};
export const getPost = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      const res = await axios.get("http://localhost:5000/api/post/" + id);
      console.log(res.data);
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: POST_ERROR,
      });
    }
  };
};
export const addLike = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put("http://localhost:5000/api/post/like/" + id);
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: res.data },
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      dispatch(setAlert(err.response.data, "danger"));
    }
  };
};
export const addComment = (id, formData) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/post/comments/" + id,
        formData
      );
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
      dispatch(setAlert("comment added!!", "success"));
    } catch (err) {
      console.log(err);
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      for (const er of err.response.data.errors) {
        dispatch(setAlert(er.msg, "danger"));
      }
    }
  };
};
export const removeComment = (postId, cmtId) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/post/removecomment/${postId}/${cmtId}`
      );
      dispatch({
        type: REMOVE_COMMENT,
        payload: cmtId,
      });
      dispatch(setAlert("comment removed!!", "success"));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      console.log(err);
      dispatch(setAlert("delete failed", "danger"));
    }
  };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:5000/api/post/" + id);
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
      dispatch(setAlert("post deleted successfylly!!", "success"));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      dispatch(setAlert(err.response.data, "danger"));
    }
  };
};
export const addPost = (formData) => {
  return async (dispatch) => {
    try {
      console.log("i ran on action");
      console.log(formData);
      const res = await axios.post("http://localhost:5000/api/post", formData);
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
      dispatch(setAlert("post created successfully", "success"));
    } catch (err) {
      console.log(err);
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      dispatch(setAlert(err.response.data, "danger"));
    }
  };
};
export const removeLike = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        "http://localhost:5000/api/post/unlike/" + id
      );
      console.log("res.data   ", res.data);
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: res.data },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      dispatch(setAlert(err.response.data.msg, "danger"));
    }
  };
};
