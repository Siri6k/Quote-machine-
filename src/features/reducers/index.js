import { RECEIVED_DATA, REQUESTING_DATA, REQUESTING_FAIL } from "../actions";

// Initial State
const defaultState = {
  fetching: false,
  quotes: [],
};

// Reducer
const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return { ...state, fetching: true, quotes: [] };
    case RECEIVED_DATA:
      return { ...state, fetching: false, quotes: action.quotes };
    case REQUESTING_FAIL:
      return { ...state, fetching: false };
    default:
      return state;
  }
};

export default asyncDataReducer;
