import { connect } from 'react-redux';
import Header from './Header';
import { logout } from 'redux/operations';
import { getUserSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  user: getUserSelector(state),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
