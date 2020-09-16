import { connect } from 'react-redux';
import CostsTable from './CostsTable';
import { getTransactionsSummarySelector, getTransactionsCategoriesSelector } from 'redux/selectors';
import { getTransactionSummary } from 'redux/operations';

const mapStateToProps = (state) => ({
  transactionsSummary: getTransactionsSummarySelector(state),
  transactionsCategories: getTransactionsCategoriesSelector(state),
});

const mapDispatchToProps = {
  getTransactionSummary,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostsTable);
