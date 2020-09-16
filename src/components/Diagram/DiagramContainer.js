import { connect } from 'react-redux';
import Diagram from './Diagram';
import { getTransactionsSummarySelector, getTransactionsCategoriesSelector } from 'redux/selectors';

const MSTP = (state) => ({
  data: getTransactionsSummarySelector(state),
  transactionsCategories: getTransactionsCategoriesSelector(state),
});

export default connect(MSTP)(Diagram);
