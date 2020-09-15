import { connect } from 'react-redux';
import CostsTable from './CostsTable';
import { getTransactionsSummary } from 'redux/selectors';

const MSTP = (state) => ({
  transactionsSummary: getTransactionsSummary(state),
});

export default connect(MSTP)(CostsTable);
