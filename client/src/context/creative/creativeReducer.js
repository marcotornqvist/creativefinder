import {
  // GET_CREATIVES,
  TOGGLE_SIDENAV,
  TOGGLE_SEARCH,
  TOGGLE_MESSAGES,
  TOGGLE_PROFILE_DROPDOWN,
  SEARCH_TEXT,
  CLEAR_SEARCH
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return {
        ...state,
        sidenavOpen: !state.sidenavOpen,
        messagesOpen: false,
        profileDropdownOpen: false
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchOpen: action.payload,
        messagesOpen: false,
        profileDropdownOpen: false
      };
    case TOGGLE_MESSAGES:
      return {
        ...state,
        messagesOpen: action.payload,
        searchOpen: false,
        sidenavOpen: false,
        profileDropdownOpen: false
      };
    case TOGGLE_PROFILE_DROPDOWN:
      return {
        ...state,
        profileDropdownOpen: action.payload,
        searchOpen: false,
        sidenavOpen: false,
        messagesOpen: false
      };
    case SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchText: ""
      };
    default:
      return state;
  }
};
