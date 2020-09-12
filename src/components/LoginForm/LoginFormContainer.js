import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { signIn } from 'redux/operations';
import { getLoaderSelector, getLocalErrorSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  loader: getLoaderSelector(state),
  localError: getLocalErrorSelector(state),
});

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
