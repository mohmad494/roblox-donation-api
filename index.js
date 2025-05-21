const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/passes/:userId", async (req, res) => {
  const userId = req.params.userId;
  const url = `https://api.roproxy.com/users/${userId}/game-passes`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch passes." });
  }
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
