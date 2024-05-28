// Importing and instantiating the express router
const router = require("express").Router();

let currentArray = [];

// test route
router.post("/data", (req, res) => {
  const numbers = req.body;

  if (!numbers.length) {
    throw new Error("Please submit an array");
  }

  // Check if the array's is exactly 500, Otherwise throw an error
  if (numbers.length) {
    if (numbers.length !== 500) {
      throw new Error("Numbers array must be exactly 500");
    } else {
      numbers.forEach((item) => {
        if (typeof item !== "number") {
          throw new Error("Numbers array must only contain numbers");
        }
      });
    }
  }

  currentArray = numbers;

  res.json(currentArray);
});

router.get("/data", (req, res) => {
  res.json(currentArray.sort((a, b) => a - b));
});

// export out router for our app to integrate
module.exports = router;
