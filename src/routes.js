const express = require("express");
const router = express.Router();
const { client, Get } = require("./faunaClient");

router.get("/tweet/:id", async (req, res) => {
  const doc = await client.query(Get(Ref(Collection("tweets"), req.params.id)));
  res.send(doc);
});

router.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = router;
