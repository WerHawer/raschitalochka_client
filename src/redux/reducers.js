import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const modal = createReducer('', {
  [actions.addModal]: (state, { payload }) => payload,
  [actions.removeModal]: () => '',
});

export default combineReducers({
  modal,
});
