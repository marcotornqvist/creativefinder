import React, { useReducer } from "react";
// import axios from "axios";
import CreativeContext from "./creativeContext";
import creativeReducer from "./creativeReducer";
import {
  // GET_CREATIVES,
  SET_SORT,
  SET_CATEGORY,
  SET_SUBCATEGORIES,
  RESET_FILTERS
} from "../types";

const CreativeState = props => {
  const initialState = {
    // When done with this list sort it alphabetically with some tool or manually!
    categories: [
      {
        name: "Music",
        subCategories: [
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
        name: "Technology",
        subCategories: [
          "Web Developer",
          "Game Developer",
          "Data Analysts",
          "Data Scientist"
        ]
      },
      {
        name: "Design",
        subCategories: [
          "3D Modeler",
          "Logo Designer",
          "Photographer",
          "UX Designer",
          "Web Designer",
          "Graphic Designer"
        ]
      }
    ],
    sort: "Recent",
    category: "Music",
    subCategories: []
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

  // Set Sub Categories
  const setSubCategories = item => {
    dispatch({
      type: SET_SUBCATEGORIES,
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
        categories: state.categories,
        sort: state.sort,
        category: state.category,
        subCategories: state.subCategories,
        setSort,
        setCategory,
        setSubCategories,
        resetFilters
      }}
    >
      {props.children}
    </CreativeContext.Provider>
  );
};

export default CreativeState;
