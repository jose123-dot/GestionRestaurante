const EmpleadoController = {};

EmpleadoController.verEmpleado = (req, res) => {
  res.send("Ver Empleado");
};

EmpleadoController.AgregarEmpleadoVista = (req, res) => {
  res.send("Agregar Empleado");
};

EmpleadoController.AgregarEmpleado = (req, res) => {
  res.send("Agregar Empleado");
};

EmpleadoController.EliminarEmpleadoVista = (req, res) => {
  res.send("Agregar Empleado Vista");
};

EmpleadoController.EliminarEmpleado = (req, res) => {
  res.send("Eliminar Empleado");
};

EmpleadoController.EditarEmpleadoVista = (req, res) => {
  res.send("editar Empleado Vista");
};

EmpleadoController.EditarEmpleado = (req, res) => {
  res.send("editar Vista");
};

export default EmpleadoController;
