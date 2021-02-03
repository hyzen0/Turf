const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const intersect = require();
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/post-test", (req, res) => {
  console.log("Got body:", req.body);
  var line1 = turf.lineString([]);

  var line2 = turf.lineString([
    [-74.0386542, 40.7302174],
    [-74.038756, 40.7295611],
  ]);
  var intersects = turf.lineIntersect(line1, line2);
  console.log(intersects);

  res.sendStatus(200);
});

module.exports = router;
