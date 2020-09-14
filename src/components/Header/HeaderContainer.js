import { connect } from 'react-redux';
import Header from './Header';
import { logout } from 'redux/operations';

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Header);
