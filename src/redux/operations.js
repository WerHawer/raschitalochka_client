import * as actions from 'redux/actions';
import api from 'api/agent';

export const signUp = (data) => async (dispatch) => {
  dispatch(actions.startLoader());

  try {
    const response = await api.Auth.signUp(data);
    console.log('response', response);
  } catch (error) {
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
    console.log('response', response);
  } catch (error) {
    dispatch(actions.addLocalError(error.response.data));
    console.log('error', error);
  } finally {
    dispatch(actions.stopLoader());
  }
};
