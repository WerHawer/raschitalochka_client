import { connect } from 'react-redux';
import CostsTable from './CostsTable';
import { getTransactionsSummary, getTransactionsCategoriesSelector } from 'redux/selectors';

const MSTP = (state) => ({
  transactionsSummary: getTransactionsSummary(state),
  transactionsCategories: getTransactionsCategoriesSelector(state),
});

export default connect(MSTP)(CostsTable);
