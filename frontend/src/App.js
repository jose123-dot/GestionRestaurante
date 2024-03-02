import "./App.css";
import Home from "./components/home/home";
import Empleado from "./components/empleado/empleado";
import Mesa from "./components/mesa/mesa";
import Plato from "./components/plato/plato";
import Orden from "./components/orden/orden";
import Login from "./components/Login/login";
import Register from "./components/Login/Register";

//roles
import UserCliente from "./components/Users/User_cliente";
import User_Mesero from "./components/Users/User_mesero";
import User_Cajero from "./components/Users/User_cajero";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="/empleado" Component={Empleado}></Route>
          <Route path="/mesa" Component={Mesa}></Route>
          <Route path="/plato" Component={Plato}></Route>
          <Route path="/Orden" Component={Orden}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/register" Component={Register}></Route>

          {/* roles */}
          <Route path="/usercliente" Component={UserCliente}></Route>
          <Route path="/usermesero" Component={User_Mesero}></Route>
          <Route path="/usercajero" Component={User_Cajero}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
