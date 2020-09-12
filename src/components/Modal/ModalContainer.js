import { connect } from 'react-redux';
import Modal from './Modal';
import { removeModal } from 'redux/actions';
import { getModalSelector } from 'redux/selectors';

const mapStateToProps = (state, ownProps) => ({
  modal: getModalSelector(state),
});

const mapDispatchToProps = {
  removeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
