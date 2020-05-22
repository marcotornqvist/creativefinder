import {
  // GET_CREATIVES,
  SET_SORT,
  SET_FILTER,
  REMOVE_FILTER,
  RESET_FILTERS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        sort: action.payload
      };
    case SET_FILTER:
      const filterExists = state.fields.find(item => item === action.payload);
      const newFilter = filterExists === action.payload && action.payload;
      return {
        ...state,
        fields: state.fields.filter(item => item !== action.payload),
        filters: [newFilter, ...state.filters]
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(item => item !== action.payload),
        fields: [action.payload, ...state.fields]
      };
    case RESET_FILTERS:
      return {
        ...state,
        sort: "Recent",
        filters: null
      };
    default:
      return state;
  }
};
