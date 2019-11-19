import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const GET_POST = "posts/GET_POSTS";
const GET_SINGLE_POST = "posts/GET_SINGLE_POST";

const initialState = {
  posts: [],
  currentPost: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_SINGLE_POST:
      return { ...state, currentPost: action.payload };
    default:
      return state;
  }
};

function getPosts(catId) {
  return dispatch => {
    axios.get("/posts/" + catId).then(resp => {
      dispatch({
        type: GET_POSTS,
        payload: resp.data
      });
    });
  };
}

function getSinglePost(postId) {
  return dispatch => {
    axios.get("/post/" + postId).then(resp => {
      dispatch({
        type: GET_POSTS,
        payload: resp.data
      });
    });
  };
}
