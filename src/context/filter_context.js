import React, { useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from "../actions";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

// SET_GRIDVIEW,
//   SET_LISTVIEW,
//   UPDATE_SORT,
//   SORT_PRODUCTS,
//   UPDATE_FILTERS,
//   FILTER_PRODUCTS,
//   CLEAR_FILTERS,

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
