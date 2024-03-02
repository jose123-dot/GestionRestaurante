import React from "react";
import MenuCajero from "../menu/menuCajero.jsx";
import Header from "../header/header.jsx";

const Cajero = () => {
  return (
    <>
      <div id="wrapper">
        C<MenuCajero></MenuCajero>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>

            <div className="container-fluid">
              <h1>Cajero</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cajero;
