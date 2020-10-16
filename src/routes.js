const express = require("express");
const router = express.Router();
const {
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
} = require("./faunaClient");

// Testing the server
router.get("/", (req, res) => {
  res.send("Hello world");
});

// Collections
// tweets: {user, text} or just { text }
// users: { name } or { name, email }
// relationships: { follower, followee }

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
    //user: Select("ref", Get(Match(Index("users_by_name"), "bob"))),
    user: Call(Fn("getUser"), "bob"),
    text: "this is a new one",
  };
  const doc = await client.query(Create(Collection("tweets"), { data }));
  res.send(doc);
});

// retrieve multiple tweet by user name
// Define an index on tweets on faunaDB and call It "tweets_by_user" and terms : data.user and values : data.text (to retrieve only the text from the tweet)
// Paginate read multiple documents
// Get read the first match document

router.get("/tweet", async (req, res) => {
  const docs = await client.query(
    Paginate(
      Match(
        Index("tweets_by_user"),
        // Select("ref", Get(Match(Index('users_by_name'), 'bob'))) this is a duplicate function so we go to fauna website -> functions and we create a function
        Call(Fn("getUser"), "bob")
      )
    )
  );
  res.send(docs);
});
module.exports = router;
