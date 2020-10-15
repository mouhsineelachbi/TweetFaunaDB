const faunadb = require("faunadb");

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

module.exports = client;
