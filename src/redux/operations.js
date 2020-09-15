import * as actions from 'redux/actions';
import api from 'api/agent';

export const signUp = (data) => async (dispatch) => {
  dispatch(actions.startLoader());
  dispatch(actions.removeLocalError());

  try {
    const response = await api.Auth.signUp(data);

    dispatch(actions.addUser(response.user));
  } catch (error) {
    dispatch(actions.addLocalError(error.response.data));
    console.log('error', error);
  } finally {
    dispatch(actions.stopLoader());
  }
};

export const signIn = (data) => async (dispatch) => {
  dispatch(actions.startLoader());
  dispatch(actions.removeLocalError());

  try {
    const response = await api.Auth.signIn(data);
    dispatch(actions.addUser(response.user));
  } catch (error) {
    dispatch(actions.addLocalError(error.response.data));
    console.log('error', error);
  } finally {
    dispatch(actions.stopLoader());
  }
};

export const getTransaction = () => async (dispatch) => {
  try {
    const transactions = await api.Transactions.getTransaction();

    dispatch(actions.addTransaction(transactions));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(actions.isAuthFalse());
    } else {
      dispatch(actions.addLocalError(error.response.data));
    }
  }
};

export const getTransactionSummary = () => async (dispatch) => {
  try {
    const transactions = await api.Transactions.getTransactionSummary();

    dispatch(actions.addTransactionsSummary(transactions));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(actions.isAuthFalse());
    } else {
      dispatch(actions.addLocalError(error.response.data));
    }
  }
};

export const getTransactionCategories = () => async (dispatch) => {
  try {
    const categories = await api.Categories.getTransactionCategories();

    dispatch(actions.transactionsCategories(categories));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(actions.isAuthFalse());
    } else {
      dispatch(actions.addLocalError(error.response.data));
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await api.Auth.signOut();
    dispatch(actions.logout());
  } catch (error) {
    console.log('error', error);
  }
};
