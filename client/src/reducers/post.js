import { post } from "request";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "../action/types";
const initialState = {
  posts: [],
  post: null,
  isLoading: true,
  error: {},
};
export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        post: payload.post,
        isLoading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: state.post.comments.filter((cmt) => cmt._id !== payload),
        isLoading: false,
      };
    case GET_POST:
      return {
        ...state,
        isLoading: false,
        post: payload,
      };
    case GET_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };
    case ADD_POST:
      console.log(state);
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, payload],
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((st) => {
          console.log(payload.likes);
          return st._id === payload._id
            ? { ...st, likes: payload.likes }
            : post;
        }),
        isLoading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        isLoading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
