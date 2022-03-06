const router = require("express").Router();

// TODO: Implement all user methods here (Update, Delete, Get, etc.);

router.get("/", (req, res) => {
    res.send("Users route");
});

module.exports = router;
