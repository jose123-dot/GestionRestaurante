import React from "react";

const Menu = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="#">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Gestion Clientes</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span> Control Clientes</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Gestion Empleado</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i>
                  <span>Control Empleados</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Gestion Orden</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span>Orden</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span>Detalles de Ordenes</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-bar-chart"></i>
              <span>Gestion de Usuarios</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="#">
                  <i className="bi bi-circle"></i>
                  <span>Control de Roles</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i className="bi bi-circle"></i>
                  <span>Control de Usuarios</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Reservas</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> Control Reclamaciones</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-envelope"></i>
              <span>Reservas</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Menu;
