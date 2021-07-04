import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    state = { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    state = { ...state, isSidebarOpen: false };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
