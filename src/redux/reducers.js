import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const modal = createReducer('', {
  [actions.addModal]: (state, { payload }) => payload,
  [actions.removeModal]: () => '',
});

const loader = createReducer(false, {
  [actions.startLoader]: () => true,

  [actions.stopLoader]: () => false,
  [actions.logout]: () => false,
});

const localError = createReducer(null, {
  [actions.addLocalError]: (state, { payload }) => payload,
  [actions.removeLocalError]: () => null,
  [actions.logout]: () => null,
});

export default combineReducers({
  modal,
  loader,
  localError,
});
