import React from "react";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Feeds from "./Feeds";
import RightNav from "./RightNav";
import RecentMsg from "./RecentMsg";
const Main = () => {
  return (
    <main>
      <Nav />
      <LeftNav />
      <Feeds />
      <RightNav />
      <RecentMsg />
    </main>
  );
};

export default Main;
