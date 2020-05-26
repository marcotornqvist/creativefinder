import React, { useReducer } from "react";
import NavigationContext from "./navigationContext";
import navigationReducer from "./navigationReducer";
import {
  TOGGLE_MOBILE_MENU,
  TOGGLE_SEARCH,
  TOGGLE_MESSAGES,
  TOGGLE_PROFILE,
  SEARCH_TEXT
} from "../types";

const NavigationState = props => {
  const initialState = {
    results: [
      {
        id: 1,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "Contact",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      },
      {
        id: 2,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "Contact",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      },
      {
        id: 3,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "User",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      },
      {
        id: 4,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "User",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      },
      {
        id: 5,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "User",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      },
      {
        id: 6,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "User",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      },
      {
        id: 7,
        name: "Denzel Curry",
        field: "Rap Artist",
        status: "User",
        image:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg"
      }
    ],
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
    searchOpen: false,
    messagesOpen: false,
    profileOpen: false,
    mobileMenuOpen: false,
    searchText: ""
  };

  const [state, dispatch] = useReducer(navigationReducer, initialState);

  // Set Search Text
  const setSearchText = text => {
    dispatch({
      type: SEARCH_TEXT,
      payload: text
    });
  };

  // Toggle Search Component
  const toggleSearch = toggle => {
    dispatch({
      type: TOGGLE_SEARCH,
      payload: toggle
    });
  };

  // Toggle Mobile Menu Component
  const toggleMobileMenu = toggle => {
    dispatch({
      type: TOGGLE_MOBILE_MENU,
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

  return (
    <NavigationContext.Provider
      value={{
        results: state.results,
        notifications: state.notifications,
        chat: state.chat,
        mobileMenuOpen: state.mobileMenuOpen,
        searchOpen: state.searchOpen,
        messagesOpen: state.messagesOpen,
        profileOpen: state.profileOpen,
        searchText: state.searchText,
        toggleMobileMenu,
        toggleSearch,
        toggleProfile,
        toggleMessages,
        setSearchText
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
