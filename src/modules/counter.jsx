import { createAction } from "@reduxjs/toolkit";
import { handleActions } from "redux-actions";

// actions
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// constants
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// reducers
const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state) => ({ number: state.number + 1 }),
    [DECREASE]: (state) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
