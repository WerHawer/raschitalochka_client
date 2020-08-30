import { connect } from "react-redux";
import TestPage from "./TestPage";
import { getTestSelector } from "redux/selectors";
import { testAction } from "redux/actions";

const mapStateToProps = (state) => ({
  test: getTestSelector(state),
});

const mapDispatchToProps = {
  testAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
