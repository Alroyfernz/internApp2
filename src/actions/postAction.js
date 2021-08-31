import { GET_POST, CREATE_POST, DELETE_POST, GET_POSTS } from "./types";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");

  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
};

export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

export const createPost = (post) => async (dispatch) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  dispatch({
    type: CREATE_POST,
    payload: result.data,
  });
};

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
