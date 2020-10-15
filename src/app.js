const app = require("express")();

const faunadb = require("faunadb");

require("dotenv").config();

const client = new faunadb.Client({
  secret: process.env.KEY,
});

const {
  Pagination,
  Get,
  Select,
  Match,
  Index,
  Create,
  Collection,
  Lambda,
  Var,
  Join,
} = faunadb.query;

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
