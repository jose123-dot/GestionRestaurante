import { json } from "express";
import cliente from "../Model/Cliente-Model.js";

const ClienteController = {};

ClienteController.verCliente = async (req, res) => {
  await cliente.find();
};

ClienteController.AgregarClienteVista = (req, res) => {
  res.send("Agregar Cliente");
};

ClienteController.AgregarCliente = async (req, res) => {
  const { numero, nombre, apellido, sexo, documento, telefono } = req.body;

  await cliente.create({
    numeroCliente: numero,
    nombre: nombre,
    apellido: apellido,
    sexo: sexo,
    documento: documento,
    telefono: telefono,
  });
  res.send(JSON.stringify(req.body));
};

ClienteController.EliminarClienteVista = (req, res) => {
  res.send("Agregar Cliente Vista");
};

ClienteController.EliminarCliente = async (req, res) => {
  const { _id } = req.body;
  await cliente.findOneAndDelete(_id);
  res.json(req.body);
};

ClienteController.EditarClienteVista = (req, res) => {
  res.send("editar cliente Vista");
};

ClienteController.EditarCliente = async (req, res) => {
  const { _id, numero, nombre, apellido, sexo, documento, telefono } = req.body;
  await cliente.findByIdAndUpdate(_id, {
    numeroCliente: numero,
    nombre: nombre,
    apellido: apellido,
    sexo: sexo,
    documento: documento,
    telefono: telefono,
  });

  res.send(req.body);
};

export default ClienteController;
