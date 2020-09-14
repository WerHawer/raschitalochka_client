import { connect } from 'react-redux';
import App from './App';

import { getModalSelector, getIsAuthSelector } from 'redux/selectors';
import { getTransaction, getTransactionSummary, getTransactionCategories } from 'redux/operations';

const mapStateToProps = (state) => ({
  modal: getModalSelector(state),
  isAuth: getIsAuthSelector(state),
});

const mapDispatchToProps = {
  getTransaction,
  getTransactionSummary,
  getTransactionCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
