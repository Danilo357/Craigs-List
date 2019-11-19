import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// action definitions
const GET_USERS = "users/GET_USERS";
const GET_SUBS = "subs/GET_SUBS";

// initial state
const initialState = {
  users: [],
  subs: []
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_SUBS:
      return { ...state, subs: action.payload };

    default:
      return state;
  }
};

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("/users").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data
      });
    });
  };
};

const getSubs = () => {
  return dispatch => {
    axios.get("/users/subs").then(resp => {
      dispatch({
        type: GET_SUBS,
        payload: resp.data
      });
    });
  };
};

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users);
  const sub = useSelector(appState => appState.userState.subs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getSubs());
  }, [dispatch]);

  return { users, sub };
}
