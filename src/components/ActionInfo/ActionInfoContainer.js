import { connect } from 'react-redux';
import ActionInfo from './ActionInfo';
import { signIn } from 'redux/operations';
import { getLoaderSelector, getLocalErrorSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  loader: getLoaderSelector(state),
  localError: getLocalErrorSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionInfo);
