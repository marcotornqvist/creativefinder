import React, { useReducer } from "react";
// import axios from "axios";
import CreativeContext from "./creativeContext";
import creativeReducer from "./creativeReducer";
import {
  // GET_CREATIVES,
  SET_SORT,
  SET_FILTER,
  REMOVE_FILTER,
  RESET_FILTERS
} from "../types";

const CreativeState = props => {
  const initialState = {
    // Alphabetical Order
    fields: [
      "Guitarist",
      "Videographer",
      "Photographer",
      "Pianist",
      "3D Modeler",
      "Music Producer",
      "Web Developer"
    ],
    sort: "Recent",
    filters: []
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
  const setSort = value => {
    dispatch({ type: SET_SORT, payload: value });
  };

  // Set Filter
  const setFilter = item => {
    dispatch({
      type: SET_FILTER,
      payload: item
    });
  };

  // Remove Filter
  const removeFilter = item => {
    dispatch({
      type: REMOVE_FILTER,
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
        fields: state.fields,
        sort: state.sort,
        filters: state.filters,
        setSort,
        setFilter,
        removeFilter,
        resetFilters
      }}
    >
      {props.children}
    </CreativeContext.Provider>
  );
};

export default CreativeState;
