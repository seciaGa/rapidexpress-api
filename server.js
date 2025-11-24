const express = require("express");
const cors = require ("cors");
const dotenv = require("dotenv");
const conectarBD = require("./config/database")

dotenv.config();
conectarBD();

const app = express();
app.use(cors());
app.use(express.json());

//rutas
app.use("/api/clientes", require("./routers/cliente.routes"));
app.use("/api/envios", require("./routers/envio.routes"));
app.use("/api/repartidores", require("./routers/repartidor.routes"));
app.use("/api/rutas", require("./routers/ruta.routes"));
app.use("/api/pagos", require("./routers/pago.routes"));


app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000")
})