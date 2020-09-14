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

const isAuth = createReducer(null, {
  [actions.addUser]: () => true,
  [actions.addTransaction]: () => true,

  [actions.logout]: () => false,
  [actions.isAuthFalse]: () => false,
});

const user = createReducer(null, {
  [actions.addUser]: (state, { payload }) => payload,

  [actions.removeUser]: () => null,
  [actions.logout]: () => null,
});

const transactions = createReducer(null, {
  [actions.addTransaction]: (state, { payload }) => payload,
  [actions.logout]: () => null,
});

const transactionsSummary = createReducer(null, {
  [actions.addTransactionsSummary]: (state, { payload }) => payload,
  [actions.logout]: () => null,
});

const transactionsCategories = createReducer(null, {
  [actions.transactionsCategories]: (state, { payload }) => payload,
  [actions.logout]: () => null,
});

export default combineReducers({
  modal,
  loader,
  localError,
  user,
  isAuth,
  transactions,
  transactionsSummary,
  transactionsCategories,
});
