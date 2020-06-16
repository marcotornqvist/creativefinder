import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
import CreativeContext from "./creativeContext";
import creativeReducer from "./creativeReducer";
import {
  // GET_CREATIVES,
  SET_SORT,
  SET_CATEGORY,
  SET_SUBCATEGORIES,
  SET_QUICKCATEGORY,
  RESET_FILTERS
} from "../types";

const CreativeState = props => {
  const initialState = {
    // When done with this list sort it alphabetically with some tool or manually!
    categories: [
      {
        id: 1,
        name: "Music",
        sub: [
          "Cellists",
          "Drummers",
          "Mixing & Mastering",
          "Music Producer",
          "Pianist",
          "Rappers",
          "Singers",
          "Song Writers",
          "Violinist",
          "Guitarists"
        ]
      },
      {
        id: 2,
        name: "Technology",
        sub: [
          "Web Developer",
          "Game Developer",
          "Data Analysts",
          "Data Scientist"
        ]
      },
      {
        id: 3,
        name: "Design & Media",
        sub: [
          "3D Modeler",
          "Videographer",
          "Logo Designer",
          "Photographer",
          "UX Designer",
          "Web Designer",
          "Graphic Designer"
        ]
      }
    ],
    sort: "Recent",
    category: null,
    subcategories: [],
    creatives: [
      {
        userID: 1,
        name: "Denzel Curry",
        username: "denzelcurraay",
        subcategories: ["Rapper"],
        reviews: [
          {
            id: uuidv4(),
            userID: 4,
            name: "Jane Doe",
            username: "janedoe",
            comment: "",
            stars: 5.0,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 3,
            name: "John Doe",
            username: "johndoe",
            comment: "",
            stars: 5.0,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 2,
            name: "JID",
            username: "Jidofficial",
            comment: "",
            stars: 5.0,
            createdAt: "2020-05-18T11:42:26+0000"
          }
        ],
        profileImg:
          "https://pbs.twimg.com/profile_images/1197025973419425793/yD_esUX3.jpg",
        createdAt: "2020-06-12T11:42:26+0000"
      },
      {
        userID: 2,
        name: "JID",
        username: "Jidofficial",
        category: "Music",
        subcategories: ["Rapper"],
        reviews: [
          {
            id: uuidv4(),
            userID: 4,
            name: "Jane Doe",
            username: "janedoe",
            comment: "",
            stars: 4.5,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 3,
            name: "John Doe",
            username: "johndoe",
            comment: "",
            stars: 3.0,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 1,
            name: "Denzel Curry",
            username: "denzelcurry",
            comment: "",
            stars: 4.0,
            createdAt: "2020-05-18T11:42:26+0000"
          }
        ],
        profileImg:
          "https://vignette.wikia.nocookie.net/hip-hop-music/images/0/09/Jid.jpg/revision/latest?cb=20190331124300",
        createdAt: "2020-05-18T11:42:26+0000"
      },
      {
        userID: 3,
        name: "John Doe",
        username: "johndoe",
        category: "Technology",
        subcategories: ["Web Developer"],
        reviews: [
          {
            id: uuidv4(),
            userID: 4,
            name: "Jane Doe",
            username: "janedoe",
            comment: "",
            stars: 1.5,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 2,
            name: "JID",
            username: "Jidofficial",
            comment: "",
            stars: 2.0,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 1,
            name: "Denzel Curry",
            username: "denzelcurry",
            comment: "",
            stars: 1.0,
            createdAt: "2020-05-18T11:42:26+0000"
          }
        ],
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
        createdAt: "2020-04-18T11:42:26+0000"
      },
      {
        userID: 4,
        name: "Jane Doe",
        username: "janedoe",
        category: "Design & Media",
        subcategories: ["Web Developer"],
        reviews: [
          {
            id: uuidv4(),
            userID: 3,
            name: "John Doe",
            username: "johndoe",
            comment: "",
            stars: 4.0,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 2,
            name: "JID",
            username: "Jidofficial",
            comment: "",
            stars: 1.0,
            createdAt: "2020-05-18T11:42:26+0000"
          },
          {
            id: uuidv4(),
            userID: 1,
            name: "Denzel Curry",
            username: "denzelcurry",
            comment: "",
            stars: 2.0,
            createdAt: "2020-05-18T11:42:26+0000"
          }
        ],
        profileImg:
          "https://specials-images.forbesimg.com/imageserve/5de308b7c283810006a35810/960x0.jpg?fit=scale",
        createdAt: "2020-03-26T11:42:26+0000"
      }
    ]
  };

  const [state, dispatch] = useReducer(creativeReducer, initialState);

  // Get Creatives
  // const getStats = async () => {
  //   const result = await axios("https://api.covid19api.com/summary");

  //   dispatch({
  //     type: GET_STATS,
  //     payload: result.data.Countries
  //   });
  // };

  // Set Sort
  const setSort = item => {
    dispatch({ type: SET_SORT, payload: item });
  };

  // Set Category
  const setCategory = item => {
    dispatch({
      type: SET_CATEGORY,
      payload: item
    });
  };

  // Set Subcategory
  const setSubcategories = item => {
    dispatch({
      type: SET_SUBCATEGORIES,
      payload: item
    });
  };

  // Sets Category & Subcategory from the landing page
  const setQuickCategory = item => {
    dispatch({
      type: SET_QUICKCATEGORY,
      payload: item
    });
  };

  // Reset Filters and Sort
  const resetFilters = () => {
    dispatch({ type: RESET_FILTERS });
  };

  return (
    <CreativeContext.Provider
      value={{
        creatives: state.creatives,
        categories: state.categories,
        sort: state.sort,
        category: state.category,
        subcategories: state.subcategories,
        setSort,
        setCategory,
        setSubcategories,
        setQuickCategory,
        resetFilters
      }}
    >
      {props.children}
    </CreativeContext.Provider>
  );
};

export default CreativeState;
