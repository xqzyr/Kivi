const router = require("express").Router();

// TODO: Implement User authorization like Login / Register here

router.get("/", (req, res) => {
    res.send("Auth route");
});

module.exports = router;
