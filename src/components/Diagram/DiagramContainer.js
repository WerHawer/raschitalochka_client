import { connect } from 'react-redux';
import Diagram from './Diagram';
import { getTransactionsSummary, getTransactionsCategoriesSelector } from 'redux/selectors';

const MSTP = (state) => ({
  data: getTransactionsSummary(state),
  transactionsCategories: getTransactionsCategoriesSelector(state),
});

export default connect(MSTP)(Diagram);
