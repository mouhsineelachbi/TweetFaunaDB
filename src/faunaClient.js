const faunadb = require("faunadb");
require("dotenv").config();

const client = new faunadb.Client({
  secret: process.env.KEY,
});

const {
  Paginate,
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
  Call,
  Function: Fn,
} = faunadb.query;

const query = faunadb.query;

module.exports = {
  client,
  Paginate,
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
  Call,
  Function: Fn,
};
