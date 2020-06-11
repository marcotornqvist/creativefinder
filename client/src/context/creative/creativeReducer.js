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
        sort: action.payload
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
        subCategories: []
      };
    case SET_SUBCATEGORIES:
      const subCategoryExists = state.subCategories.includes(action.payload);
      const removeFilter = state.subCategories.filter(
        el => el !== action.payload
      );

      return {
        ...state,
        subCategories: subCategoryExists
          ? removeFilter
          : [action.payload, ...state.subCategories]
      };
    case SET_QUICKCATEGORY:
      let category = state.categories.filter(
        item => item.name === action.payload.categoryName
      );
      category = category[0];

      const subCategories = category.sub.filter(
        item => item === action.payload.name
      );

      return {
        ...state,
        category,
        subCategories
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
