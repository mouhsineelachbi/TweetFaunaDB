const app = require("express")();
const faunadb = require("faunadb");
const route = require("./routes");

require("dotenv").config();

const PORT = process.env.PORT;

app.use(route);

app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
