import {
  // GET_CREATIVES,
  SET_SORT,
  SET_CATEGORY,
  SET_SUBCATEGORIES,
  RESET_FILTERS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        sort: action.payload
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload !== state.category ? action.payload : null
      };
    case SET_SUBCATEGORIES:
      const filterExists = state.fields.find(item => item === action.payload);
      const newFilter = filterExists === action.payload && action.payload;
      return {
        ...state,
        subCategories: [action.payload, ...state.subCategories]
      };
    case RESET_FILTERS:
      return {
        ...state,
        sort: "Recent",
        category: null,
        subCategory: null
      };
    default:
      return state;
  }
};
