import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import Dashboard from "../dashboard/dashboard.jsx";

const Home = () => {
  return (
    <>
      <div id="wrapper">
        <Menu></Menu>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>

            <div className="container-fluid">
              <Dashboard></Dashboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
