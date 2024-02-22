const ClienteController = {};

ClienteController.verCliente = (req, res) => {
  res.send("Ver Cliente");
};

ClienteController.AgregarClienteVista = (req, res) => {
  res.send("Agregar Cliente");
};

ClienteController.AgregarCliente = (req, res) => {
  res.send("Agregar Cliente");
};

ClienteController.EliminarClienteVista = (req, res) => {
  res.send("Agregar Cliente Vista");
};

ClienteController.EliminarCliente = (req, res) => {
  res.send("Eliminar Cliente");
};

ClienteController.EditarClienteVista = (req, res) => {
  res.send("editar cliente Vista");
};

ClienteController.EditarCliente = (req, res) => {
  res.send("editar Vista");
};

export default ClienteController;
