import { createAction } from '@reduxjs/toolkit';

export const logout = createAction('user/logout');

export const addModal = createAction('modal/add');
export const removeModal = createAction('modal/remove');

export const startLoader = createAction('app/startLoader');
export const stopLoader = createAction('app/stopLoader');

export const addLocalError = createAction('user/addLocalError');
export const removeLocalError = createAction('user/removeLocalError');

export const addUser = createAction('user/add');
export const removeUser = createAction('user/remove');

export const transactionsCategories = createAction('transactionCategory/add');

export const addTransaction = createAction('transactions/add');

export const addTransactionsSummary = createAction('transactions/summary');

export const isAuthFalse = createAction('isAuth/false');
