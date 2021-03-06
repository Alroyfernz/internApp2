import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  DELETE_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,

        posts: payload,
      };
    case CREATE_POST:
      console.log(payload);
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POST:
      return {
        ...state,
        post: state.posts.find((postItem) => postItem.id === payload),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id !== payload),
      };
    default:
      return state;
  }
};
