require("dotenv").config();
const express = require("express");
var cors = require("cors");
const sequelize = require("./config/database");
const sequelize2 = require("./config/database2");
const sequelize3 = require("./config/database3");
const cargoRouter = require("./src/routes/cargo_personal");
const sedeRouter = require("./src/routes/sedes");
const centro_costo_router = require("./src/routes/centro_costo");
const ubicacionRouter = require("./src/routes/ubicacion_fisica");
const usuarioRouter = require("./src/routes/usuario_final");
const asignacionRouter = require("./src/routes/asignaciones");
const ejecutoraRouter = require("./src/routes/unidad_ejecutora");
const authRouter = require("./src/routes/auth");
const usuarioAuthRouter = require("./src/routes/usuario");
const planillaRouter = require("./src/routes/planillaUsuarios");
const adeudoRouter = require("./src/routes/adeudo");
const app = express();
const port = 3001;
const port2 = 3002;
const port3 = 3003;


app.use(cors());
app.use(express.json());
app.use("/api/v1/cargo_personal", cargoRouter);
app.use("/api/v1/sedes", sedeRouter);
app.use("/api/v1/centro_costo", centro_costo_router);
app.use("/api/v1/ubicacion", ubicacionRouter);
app.use("/api/v1/usuario", usuarioRouter);
app.use("/api/v1/asignacion", asignacionRouter);
app.use("/api/v1/ejecutora", ejecutoraRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/usuarioAuth", usuarioAuthRouter);
app.use("/api/v1/planilla", planillaRouter);
app.use("/api/v1/adeudo", adeudoRouter);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize2
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(port2, () => {
      console.log(`Server is running on http://localhost:${port2}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  sequelize3
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(port3, () => {
      console.log(`Server is running on http://localhost:${port3}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

