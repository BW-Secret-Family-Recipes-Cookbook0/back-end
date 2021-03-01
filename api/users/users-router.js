const router = require("express").Router();

const Users = require(".users-model");
// const restricted = require("../auth/auth-middleware");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.send(error);
    });
});
module.exports = router;
