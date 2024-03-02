import React from "react";
import MenuCliente from "../menu/menuCliente.jsx";
import Header from "../header/header.jsx";

const Cliente = () => {
  return (
    <>
      <div id="wrapper">
        C<MenuCliente></MenuCliente>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>

            <div className="container-fluid">
              <h1>Cliente</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cliente;
