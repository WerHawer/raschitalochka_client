import { connect } from 'react-redux';
import TransactionsSummary from './TransactionsSummary';
import { getIncomeSummary, getCostsSummary } from 'redux/selectors';

const MSTP = (state) => ({
  totalIncome: getIncomeSummary(state),
  totalCosts: getCostsSummary(state),
});

export default connect(MSTP)(TransactionsSummary);
