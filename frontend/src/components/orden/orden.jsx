import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";

const Orden = () => {
  return (
    <>
      <div id="wrapper">
        <Menu></Menu>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>

            <div className="container-fluid">
              <h1>Orden</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orden;
