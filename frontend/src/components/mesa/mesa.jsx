import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";

const Mesa = () => {
  return (
    <>
      <div id="wrapper">
        <Menu></Menu>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>

            <div className="container-fluid">
              <h1>Mesas</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mesa;
