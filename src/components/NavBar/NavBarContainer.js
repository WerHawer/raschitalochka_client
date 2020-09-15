import { connect } from 'react-redux';
import NavBar from './NavBar';
import { getUserBalance } from 'redux/selectors';

const MSTP = (state) => ({
  balance: getUserBalance(state),
});

export default connect(MSTP)(NavBar);
