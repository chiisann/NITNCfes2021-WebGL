const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});

// https://dev.to/dro1/deploying-your-react-or-vue-project-to-glitch-35kj