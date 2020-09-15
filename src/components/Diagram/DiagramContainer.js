import { connect } from 'react-redux';
import Diagram from './Diagram';
import { getTransactionsSummary } from 'redux/selectors';

const MSTP = (state) => ({
  data: getTransactionsSummary(state),
});

export default connect(MSTP)(Diagram);
