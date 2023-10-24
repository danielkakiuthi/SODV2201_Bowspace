const path = require('path');
const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
