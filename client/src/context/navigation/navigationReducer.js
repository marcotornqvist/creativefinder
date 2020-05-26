import {
  TOGGLE_SEARCH,
  TOGGLE_MESSAGES,
  TOGGLE_PROFILE,
  SEARCH_TEXT,
  TOGGLE_MOBILE_MENU
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        mobileMenuOpen: action.payload,
        messagesOpen: false,
        profileOpen: false
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchOpen: action.payload,
        messagesOpen: false,
        profileOpen: false
      };
    case TOGGLE_MESSAGES:
      return {
        ...state,
        messagesOpen: action.payload,
        mobileMenuOpen: false,
        searchOpen: false,
        profileOpen: false
      };
    case TOGGLE_PROFILE:
      return {
        ...state,
        profileOpen: action.payload,
        searchOpen: false,
        messagesOpen: false
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
