import React from "react";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Feeds from "./Feeds";
import RightNav from "./RightNav";
import RecentMsg from "./RecentMsg";
import "../../static/css/main.css";
import user from "../../static/img/icons/avatar.png";

const Main = () => {
  const data = [
    {
      img: user,
      fullname: "Simo edwin",
      username: "@developedbyed",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
      isVerified: true,
      timestamp: 3,
      commentCount: 30000,
      retweetCount: 13872,
      like: 84321,
    },
    {
      img: user,
      fullname: "Brad Traversy",
      username: "@traversy",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
      isVerified: false,
      timestamp: 45,
      commentCount: 12000,
      retweetCount: 19823,
      like: 4751,
    },
    {
      img: user,
      fullname: "Harrison Okafor",
      username: "@harnixcodes",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
      isVerified: true,
      timestamp: 30,
      commentCount: 1,
      retweetCount: 3,
      like: 8,
    },
    {
      img: user,
      fullname: "Khalid Mustapha",
      username: "@crazyprogrammer",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
      isVerified: true,
      timestamp: 30,
      commentCount: 30,
      retweetCount: 7,
      like: 5,
    },
    {
      img: user,
      fullname: "Clever Qazi",
      username: "@cleverprogrammer",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
      isVerified: true,
      timestamp: 30,
      commentCount: 3,
      retweetCount: 8,
      like: 1,
    },
  ];
  return (
    <main>
      <Nav />
      <div className="body-container">
        <LeftNav />
        <Feeds data={data} />
        <RightNav />
        <RecentMsg />
      </div>
    </main>
  );
};

export default Main;
