const { database } = require("./dataBase/db");
const router = require("./routes/contacts");
const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.listen(PORT, async () => {
  await database.sync({ force: false });
  console.log("Server listening on port " + PORT);
});
