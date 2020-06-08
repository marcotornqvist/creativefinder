import React, { useReducer } from "react";
import NavigationContext from "./navigationContext";
import navigationReducer from "./navigationReducer";
import {
  TOGGLE_SEARCH,
  TOGGLE_MESSAGES,
  TOGGLE_PROFILE,
  TOGGLE_SIDENAV,
  SEARCH_TEXT
} from "../types";

const NavigationState = props => {
  const initialState = {
    notifications: [
      {
        id: 1,
        name: "Denzel Curry",
        message: "Has accepted your friend request.",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "One day ago"
      },
      {
        id: 2,
        name: "Denzel Curry",
        message: "Has accepted your friend request.",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "One day ago"
      },
      {
        id: 3,
        name: "Denzel Curry",
        message:
          "Lorem ipsum dolor sit amet consectetur adipis elit. Non, soluta? Corporis mollitia",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "One day ago"
      }
    ],
    chat: [
      {
        id: 1,
        name: "Denzel Curry",
        message: "Has accepted your friend request.",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "One day ago"
      },
      {
        id: 2,
        name: "Denzel Curry",
        message: "Has accepted your friend request.",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "One day ago"
      },
      {
        id: 3,
        name: "Denzel Curry",
        message:
          "Lorem ipsum dolor sit amet consectetur adipis elit. Non, soluta? Corporis mollitia",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "One day ago"
      }
    ],
    showSearch: false,
    showMessages: false,
    showProfile: false,
    showSidenav: false,
    searchText: ""
  };

  const [state, dispatch] = useReducer(navigationReducer, initialState);

  // Toggle Search Component
  const toggleSearch = toggle => {
    dispatch({
      type: TOGGLE_SEARCH,
      payload: toggle
    });
  };

  // Toggle Messages Component
  const toggleMessages = toggle => {
    dispatch({
      type: TOGGLE_MESSAGES,
      payload: toggle
    });
  };

  // Toggle Profile Component
  const toggleProfile = toggle => {
    dispatch({
      type: TOGGLE_PROFILE,
      payload: toggle
    });
  };

  // Toggle Sidenav Component
  const toggleSidenav = toggle => {
    dispatch({
      type: TOGGLE_SIDENAV,
      payload: toggle
    });
  };

  // Set Search Text
  const setSearchText = text => {
    dispatch({
      type: SEARCH_TEXT,
      payload: text
    });
  };

  return (
    <NavigationContext.Provider
      value={{
        notifications: state.notifications,
        chat: state.chat,
        showSearch: state.showSearch,
        showMessages: state.showMessages,
        showProfile: state.showProfile,
        showSidenav: state.showSidenav,
        searchText: state.searchText,
        toggleSearch,
        toggleMessages,
        toggleProfile,
        toggleSidenav,
        setSearchText
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
