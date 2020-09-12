import { connect } from 'react-redux';
import OverviewPage from './OverviewPage';
import { addModal } from 'redux/actions';
import { getModalSelector } from 'redux/selectors';

const mapStateToProps = (state, ownProps) => ({
  modal: getModalSelector(state),
});

const mapDispatchToProps = {
  addModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
