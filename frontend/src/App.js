import "./App.css";
import Cliente from "./components/cliente/cliente";
import Home from "./components/home/home";
import Empleado from "./components/empleado/empleado";
import Mesa from "./components/mesa/mesa";
import Plato from "./components/plato/plato";
import Orden from "./components/orden/orden";
import Login from "./components/Login/login";
import Register from "./components/Login/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/cliente" Component={Cliente}></Route>
          <Route path="/empleado" Component={Empleado}></Route>
          <Route path="/mesa" Component={Mesa}></Route>
          <Route path="/plato" Component={Plato}></Route>
          <Route path="/Orden" Component={Orden}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
