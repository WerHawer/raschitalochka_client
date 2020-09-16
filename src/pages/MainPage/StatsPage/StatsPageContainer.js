import { connect } from 'react-redux';
import StatsPage from './StatsPage';
import { getTransactionsSummarySelector, getTransactionsCategoriesSelector } from 'redux/selectors';

const mapStateToProps = (state) => ({
  summary: getTransactionsSummarySelector(state),
  categories: getTransactionsCategoriesSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
