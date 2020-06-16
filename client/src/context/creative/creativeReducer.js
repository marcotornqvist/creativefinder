import {
  // GET_CREATIVES,
  SET_SORT,
  SET_CATEGORY,
  SET_SUBCATEGORIES,
  SET_QUICKCATEGORY,
  RESET_FILTERS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        sort: action.payload === "remove" ? "Recent" : action.payload
      };
    case SET_CATEGORY:
      const categoryExists =
        state.category !== null && state.category.id === action.payload.id;
      let newObject = state.categories.filter(
        item => item.id === action.payload.id
      );
      newObject = newObject[0];
      return {
        ...state,
        category: categoryExists ? null : newObject,
        subcategories: []
      };
    case SET_SUBCATEGORIES:
      const subcategoryExists = state.subcategories.includes(action.payload);
      const removeFilter = state.subcategories.filter(
        el => el !== action.payload
      );

      return {
        ...state,
        subcategories: subcategoryExists
          ? removeFilter
          : [action.payload, ...state.subcategories]
      };
    case SET_QUICKCATEGORY:
      let category = state.categories.filter(
        item => item.name === action.payload.categoryName
      );
      category = category[0];

      const subcategories = category.sub.filter(
        item => item === action.payload.name
      );

      return {
        ...state,
        category,
        subcategories
      };
    case RESET_FILTERS:
      return {
        ...state,
        sort: "Recent",
        category: null,
        subcategories: []
      };
    default:
      return state;
  }
};
