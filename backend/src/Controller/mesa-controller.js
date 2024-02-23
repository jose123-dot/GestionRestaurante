const mesaController = {};

mesaController.vermesa = (req, res) => {
  res.send("Ver mesa");
};

mesaController.AgregarmesaVista = (req, res) => {
  res.send("Agregar mesa");
};

mesaController.Agregarmesa = (req, res) => {
  res.send("Agregar mesa");
};

mesaController.EliminarmesaVista = (req, res) => {
  res.send("Eliminar mesa Vista");
};

mesaController.Eliminarmesa = (req, res) => {
  res.send("Eliminar mesa");
};

mesaController.EditarmesaVista = (req, res) => {
  res.send("editar mesa Vista");
};

mesaController.Editarmesa = (req, res) => {
  res.send("editar Vista");
};

export default mesaController;
