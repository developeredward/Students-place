import React from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import Main from "./components/main";

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <>
        <Main {...this.props} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
