import React from "react";
import { Link } from "react-router-dom";

const MenuCliente = () => {
  return (
    <>
      {/* /* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            ERMA <sup>V1.0</sup>
          </div>
        </Link>

        {/*  <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/*  <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/cliente">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>cliente</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuCliente;
