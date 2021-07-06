import React, { Component } from "react";
import Feeds from "../Feeds";

import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

class FeedsList extends Component {
  state = {
    feeds: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios.get(`${baseUrl}/feeds/`).then((res) => {
      this.setState({
        feeds: res.data,
        loading: false,
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <>
        <Feeds data={this.state.feeds} />
      </>
    );
  }
}

export default FeedsList;
