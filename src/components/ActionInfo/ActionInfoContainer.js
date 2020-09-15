import { connect } from 'react-redux';
import ActionInfo from './ActionInfo';
import { getTransactionsSelector, getTransactionsCategoriesSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  transactions: getTransactionsSelector(state),
  categories: getTransactionsCategoriesSelector(state),
});

export default connect(mapStateToProps)(ActionInfo);
