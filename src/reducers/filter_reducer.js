import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === UPDATE_SORT) {
  }
  if (action.type === UPDATE_FILTERS) {
  }
  if (action.type === SORT_PRODUCTS) {
  }
  if (action.type === FILTER_PRODUCTS) {
  }
  if (action.type === CLEAR_FILTERS) {
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
