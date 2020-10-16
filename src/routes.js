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

// Testing the server
router.get("/", (req, res) => {
  res.send("Hello world");
});

// Getting tweet created by a specific user
router.get("/tweet/:id", async (req, res) => {
  const doc = await client
    .query(Get(Ref(Collection("tweets"), req.params.id)))
    .catch((e) => console.log(e));

  res.send(doc);
});

// Posting a tweet
router.post("/tweet", async (req, res) => {
  const data = {
    user: Select("ref", Get(Match(Index("users_by_name"), "bob"))),
    text: "this is a new one",
  };
  const doc = await client.query(Create(Collection("tweets"), { data }));
  res.send(doc);
});

module.exports = router;
