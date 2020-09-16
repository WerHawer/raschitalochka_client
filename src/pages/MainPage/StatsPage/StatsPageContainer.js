import { connect } from 'react-redux';
import StatsPage from './StatsPage';
import { getTransactionSummary } from 'redux/operations';

const MDTP = {
  getTransactionSummary,
};

export default connect(null, MDTP)(StatsPage);
