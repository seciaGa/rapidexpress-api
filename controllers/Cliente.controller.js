const Cliente = require("../models/Cliente");

// Mostrar clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//crear
exports.crearCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};


//actua
exports.actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params; 

        const clienteActualizado = await Cliente.findByIdAndUpdate(
            id,
            req.body,
            { new: true } 
        );

        res.json(clienteActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//elimian
exports.eliminarCliente = async (req, res) => {
    try {
        const id = req.params.id;  // se obtene el id desde la URL

        const cliente = await Cliente.findByIdAndDelete(id);

        res.json({ mensaje: "Cliente eliminado", cliente });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
