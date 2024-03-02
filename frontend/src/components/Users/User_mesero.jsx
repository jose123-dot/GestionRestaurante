import React from "react";
import MenuMesero from "../menu/menuMesero.jsx";
import Header from "../header/header.jsx";

const Mesero = () => {
  return (
    <>
      <div id="wrapper">
        C<MenuMesero></MenuMesero>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>

            <div className="container-fluid">
              <h1>Mesero</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mesero;
