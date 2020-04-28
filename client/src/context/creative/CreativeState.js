import React, { useReducer } from "react";
// import axios from "axios";
import CreativeContext from "./creativeContext";
import creativeReducer from "./creativeReducer";
// import { GET_CREATIVES } from "../types";

const CreativeState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(creativeReducer, initialState);

  // Get Creatives
  // const getStats = async () => {
  //   const result = await axios("https://api.covid19api.com/summary");

  //   dispatch({
  //     type: GET_STATS,
  //     payload: result.data.Countries
  //   });
  // };

  return (
    <CreativeContext.Provider
      value={
        {
          // getCreatives
        }
      }
    >
      {props.children}
    </CreativeContext.Provider>
  );
};

export default CreativeState;
