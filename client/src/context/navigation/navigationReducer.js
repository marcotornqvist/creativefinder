import {
  TOGGLE_SEARCH,
  TOGGLE_MESSAGES,
  TOGGLE_PROFILE,
  TOGGLE_SIDENAV,
  SEARCH_TEXT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        showSearch: action.payload,
        showMessages: false,
        showProfile: false,
        showSidenav: false
      };
    case TOGGLE_MESSAGES:
      return {
        ...state,
        showSearch: false,
        showMessages: action.payload,
        showProfile: false,
        showSidenav: false
      };
    case TOGGLE_PROFILE:
      return {
        ...state,
        showSearch: false,
        showMessages: false,
        showProfile: action.payload,
        showSidenav: false
      };
    case TOGGLE_SIDENAV:
      return {
        ...state,
        showSearch: false,
        showMessages: false,
        showProfile: false,
        showSidenav: action.payload
      };
    case SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    default:
      return state;
  }
};
