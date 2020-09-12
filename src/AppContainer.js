import { connect } from 'react-redux';
import App from './App';

import { getModalSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  modal: getModalSelector(state),
});

export default connect(mapStateToProps)(App);
