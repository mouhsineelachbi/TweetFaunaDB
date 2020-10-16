const express = require("express");
const router = express.Router();
const {
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
} = require("./faunaClient");

router.get("/tweet/:id", async (req, res) => {
  const doc = await client
    .query(Get(Ref(Collection("tweets"), req.params.id)))
    .catch((e) => console.log(e));

  res.send(doc);
});

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/tweet", async (req, res) => {
  const data = {
    user: "",
    text: "this is a new one",
  };
  const doc = await client.query(Create(Collection("tweets"), { data }));
  res.send(doc);
});

module.exports = router;
