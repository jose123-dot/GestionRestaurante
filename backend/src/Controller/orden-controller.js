const OrdenController = {};

OrdenController.verOrden = (req, res) => {
  res.send("Ver Orden");
};

OrdenController.AgregarOrdenVista = (req, res) => {
  res.send("Agregar Orden");
};

OrdenController.AgregarOrden = (req, res) => {
  res.send("Agregar Orden");
};

OrdenController.EliminarOrdenVista = (req, res) => {
  res.send("Eliminar Orden Vista");
};

OrdenController.EliminarOrden = (req, res) => {
  res.send("Eliminar Orden");
};

OrdenController.EditarOrdenVista = (req, res) => {
    res.send("editar orden Vista");
  };
  
  OrdenController.EditarOrden = (req, res) => {
    res.send("editar Vista");
  };
  
  export default OrdenController;

