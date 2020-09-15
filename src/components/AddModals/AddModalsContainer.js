import { connect } from 'react-redux';
import AddModals from './AddModals';
import { addIncome, addExpense } from 'redux/operations';
import { getLoaderSelector, getLocalErrorSelector, getTransactionsCategoriesSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  loader: getLoaderSelector(state),
  localError: getLocalErrorSelector(state),
  transactionsCategories: getTransactionsCategoriesSelector(state),
});

const mapDispatchToProps = {
  addExpense,
  addIncome,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModals);
