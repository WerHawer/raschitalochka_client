import { connect } from 'react-redux';
import RegForm from './RegForm';
import { signUp } from 'redux/operations';
import { getLoaderSelector, getLocalErrorSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  loader: getLoaderSelector(state),
  localError: getLocalErrorSelector(state),
});

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
