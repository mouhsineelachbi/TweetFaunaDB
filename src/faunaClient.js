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
  Ref,
} = faunadb.query;

const query = faunadb.query;

module.exports = {
  client,
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
  Ref,
};
