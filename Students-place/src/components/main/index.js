import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Feeds from "./Feeds";
import RightNav from "./RightNav";
import RecentMsg from "./RecentMsg";
import "../../static/css/main.css";
import * as actions from "../../store/actions/auth";
import useFetch from "../useFetch";
import Login from "../authentication/Login";

export class main extends Component {
  state = {
    data: [],
  };

  // const { data, isLoading, error } = useFetch(
  //   this.state.token,
  //   "http://127.0.0.1:8000/api/feeds/"
  // );

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.token) {
      // axios.defaults.headers = {
      //   "Content-Type": "application/json",
      //   Authorization: newProps.token,
      // };
      axios
        .get("http://127.0.0.1:8000/api/feeds/")
        .then((res) => {
          this.setState({
            data: res.data,
          });
          // setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <Router>
        <main>
          <Nav />
          <div className="body-container">
            <Switch>
              <Route exact path="/">
                <LeftNav />
                {this.state.data ? (
                  <Feeds User={this.User} feeds={this.state.data} />
                ) : (
                  <h1
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    NOTHIGN
                  </h1>
                )}

                <RightNav />
                <RecentMsg />
              </Route>
              <Route exact path="/login/">
                <LeftNav />
                {this.state.data ? (
                  <Feeds User={this.User} feeds={this.state.data} />
                ) : (
                  <h1
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    NOTHIGN
                  </h1>
                )}
                <RightNav />
                <RecentMsg />
                <Login />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    // state: state.error,
  };
};

export default connect(mapStateToProps)(main);
