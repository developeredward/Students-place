import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Feeds from "./Feeds";
import FeedDetail from "./FeedDetail";
import RightNav from "./RightNav";
import RecentMsg from "./RecentMsg";
import "../../static/css/main.css";
import useFetch from "../hooks/useFetch";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Loading from "../Loading";
import Profile from "./Profile";

const main = (props) => {
  const { data, isLoading, error, updateFeed } = useFetch(
    props.token,
    "http://127.0.0.1:8000/api/feeds/"
  );

  return (
    <Router>
      <main>
        <Nav />
        <div className="body-container">
          <LeftNav />
          <Switch>
            <Route exact path="/">
              {isLoading ? (
                <div
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                    background: "#313131",
                  }}
                >
                  <Loading text="Loading....." />
                </div>
              ) : (
                <>
                  <Feeds
                    User={props.User}
                    updated={updateFeed}
                    loading={isLoading}
                    feeds={data}
                  />
                  {props.isAuthenticated && (
                    <>
                      <RightNav />
                      <RecentMsg />
                    </>
                  )}
                </>
              )}
            </Route>
            <Route exact path="/login/">
              <LeftNav />
              {/* {props.data ? (
                <Feeds loading={props.isLoading} feeds={props.data} />
              ) : (
                <Loading text="Getting Feeds....." />
              )} */}
              <RightNav />
              <RecentMsg />
              <Login />
            </Route>
            <Route exact path="/signup/">
              <Signup />
            </Route>
            <Route exact path="/:username/">
              <Profile />
            </Route>
            <Route exact path="/post/:id/">
              <FeedDetail />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.token !== null,

    // state: state.error,
  };
};

export default connect(mapStateToProps)(main);
