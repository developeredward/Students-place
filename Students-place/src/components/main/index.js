import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Feeds from "./Feeds";
import RightNav from "./RightNav";
import RecentMsg from "./RecentMsg";
import "../../static/css/main.css";
import user from "../../static/img/avatar.png";
import anoda from "../../static/img/icons/anoda.jpg";
// import FeedsList from "./containers/feedsList";
import useFetch from "../useFetch";
const Main = () => {
  // const data = [
  //   {
  //     img: user,
  //     fullname: "Simo edwin",
  //     username: "@developedbyed",
  //     post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
  //     isVerified: true,
  //     timestamp: 3,
  //     commentCount: 30000,
  //     retweetCount: 13872,
  //     comments: [
  //       {
  //         img: anoda,
  //         fullname: "Khalid Mujahid",
  //         username: "@crazyprogrammer",
  //         comment: "Leemaooooo goan sitdan",
  //         isVerified: true,
  //       },
  //       {
  //         fullname: "Somone Loop",
  //         username: "@tester",
  //         comment: "Wow",
  //         isVerified: false,
  //       },
  //     ],
  //     like: 84321,
  //   },
  //   {
  //     img: user,
  //     fullname: "Brad Traversy",
  //     username: "@traversy",
  //     post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
  //     isVerified: false,
  //     timestamp: 45,
  //     commentCount: 12000,
  //     retweetCount: 19823,
  //     comments: [],
  //     like: 4751,
  //   },
  //   {
  //     img: anoda,
  //     fullname: "Harrison Okafor",
  //     username: "@harnixcodes",
  //     post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
  //     isVerified: true,
  //     timestamp: 30,
  //     commentCount: 1,
  //     retweetCount: 3,
  //     comments: [
  //       {
  //         img: user,
  //         fullname: "Clever Qazi",
  //         username: "@cleverprogrammer",
  //         comment: "I thought this was a good work",
  //         isVerified: true,
  //       },
  //       {
  //         img: anoda,
  //         fullname: "Khalid Mustapha",
  //         username: "@crazyprogrammer",
  //         comment: "Leemaooooo goan sitdan",
  //         isVerified: true,
  //       },
  //       {
  //         fullname: "Somone Loop",
  //         username: "@tester",
  //         comment: "Wow",
  //         isVerified: false,
  //       },
  //     ],
  //     like: 8,
  //   },
  //   {
  //     img: anoda,
  //     fullname: "Khalid Mustapha",
  //     username: "@crazyprogrammer",
  //     post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
  //     isVerified: true,
  //     timestamp: 30,
  //     commentCount: 30,
  //     retweetCount: 7,
  //     comments: [
  //       {
  //         fullname: "Somone Loop",
  //         username: "@tester",
  //         comment: "Wow",
  //         isVerified: false,
  //       },
  //     ],
  //     like: 5,
  //   },
  //   {
  //     img: user,
  //     fullname: "Clever Qazi",
  //     username: "@cleverprogrammer",
  //     post: "Lorem ipsum dolor sit amet consectetur adipisicing elit repudiandae impedit voluptatem eligendi vero autem ipsa nisi perferendis dicta aliquid quaerat natus consequuntur repellat nam accusamus perspiciatis nostrum. Magnam officia quod dolor, aspernatur sunt animi eius laudantium consequatur odit ratione",
  //     isVerified: true,
  //     timestamp: 30,
  //     commentCount: 3,
  //     retweetCount: 8,
  //     comments: [
  //       {
  //         img: user,
  //         fullname: "Clever Qazi",
  //         username: "@cleverprogrammer",
  //         comment: "I thought this was a good work",
  //         isVerified: true,
  //       },
  //       {
  //         img: anoda,
  //         fullname: "Khalid Mustapha",
  //         username: "@crazyprogrammer",
  //         comment: "Leemaooooo goan sitdan",
  //         isVerified: true,
  //       },
  //       {
  //         fullname: "Somone Loop",
  //         username: "@tester",
  //         comment: "Wow",
  //         isVerified: false,
  //       },
  //     ],
  //     like: 1,
  //   },
  // ];

  // const { data, isLoading, error } = useFetch(
  //   "http://127.0.0.1:8000/api/feeds/"
  // );
  const User = {
    fullname: "Berthjone Redely",
    username: "developeredward",
    email: "edwardberth1@gmail.com",
    profilePicture: user,
  };

  const { data, isLoading, error } = useFetch(
    "http://127.0.0.1:8000/api/feeds/"
  );

  return (
    <main>
      <Nav />
      <div className="body-container">
        <LeftNav />
        {data ? (
          <Feeds User={User} feeds={data} />
        ) : (
          <h1
            style={{
              width: "100vw",
              height: "100vh",
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
      </div>
    </main>
  );
};

export default Main;
