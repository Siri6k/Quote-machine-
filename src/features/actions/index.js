import { url } from "./constants";
// Action Types
export const REQUESTING_DATA = "REQUESTING_DATA";
export const REQUESTING_FAIL = "REQUESTING_FAIL";
export const RECEIVED_DATA = "RECEIVED_DATA";

// Action Creators
export const requestingData = () => ({ type: REQUESTING_DATA });
export const receivedData = (data) => ({
  type: RECEIVED_DATA,
  quotes: data.quotes,
});
export const requestFail = () => ({ type: REQUESTING_FAIL });

// Async Action Creator using redux-thunk
export const handleAsync = () => {
  return async (dispatch) => {
    dispatch(requestingData());
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(receivedData(data));
    } catch (error) {
      dispatch(requestFail());
    }
  };
};
