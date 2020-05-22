import { LOGIN, LOGOUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: null
      };
    default:
      return state;
  }
};
