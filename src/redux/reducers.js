import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./actions";

const test = createReducer("Test Redux", {
  [actions.testAction]: (state, { payload }) => payload,
});

export default combineReducers({
  test,
});
