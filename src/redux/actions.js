import { createAction } from '@reduxjs/toolkit';

export const logout = createAction('user/logout');

export const addModal = createAction('modal/add');
export const removeModal = createAction('modal/remove');

export const startLoader = createAction('app/startLoader');
export const stopLoader = createAction('app/stopLoader');

export const addLocalError = createAction('user/addLocalError');
export const removeLocalError = createAction('user/removeLocalError');
