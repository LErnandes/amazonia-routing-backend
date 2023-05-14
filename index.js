const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const path = require("./routes/path");
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.static("dist"));

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Routes
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/path", path);

// Init
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
