import { connect } from 'react-redux';
import ModalsHeader from './ModalsHeader';
import { removeModal } from 'redux/actions';

const mapDispatchToProps = {
  removeModal,
};

export default connect(null, mapDispatchToProps)(ModalsHeader);
