import { connect } from 'react-redux';
import TotalBalance from './TotalBalance';
import { getUserBalance } from 'redux/selectors';

const MSTP = (state) => ({
  balance: getUserBalance(state),
});

export default connect(MSTP)(TotalBalance);
