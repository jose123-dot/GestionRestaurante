const platoController = {};

platoController.verplato = (req, res) => {
  res.send("Ver plato");
};

platoController.AgregarplatoVista = (req, res) => {
  res.send("Agregar plato");
};

platoController.Agregarplato = (req, res) => {
  res.send("Agregar plato");
};

platoController.EliminarplatoVista = (req, res) => {
  res.send("Eliminar plato Vista");
};

platoController.Eliminarplato = (req, res) => {
  res.send("Eliminar plato");
};

platoController.EditarplatoVista = (req, res) => {
  res.send("editar plato Vista");
};

platoController.Editarplato = (req, res) => {
  res.send("editar Vista");
};

export default platoController;
