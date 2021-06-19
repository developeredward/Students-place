import React from "react";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Feeds from "./Feeds";
import RightNav from "./RightNav";
import RecentMsg from "./RecentMsg";
import "../../static/css/main.css";
const Main = () => {
  return (
    <main>
      <Nav />
      <div className="body-container">
        <LeftNav />
        <Feeds />
        <RightNav />
        <RecentMsg />
      </div>
    </main>
  );
};

export default Main;
