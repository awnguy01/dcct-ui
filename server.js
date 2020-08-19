const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const port = 8080;

app.use(
  "/api",
  createProxyMiddleware({ target: "http://localhost:8084", changeOrigin: true })
);

app.use(express.static(path.join(__dirname, "dist/dcct-ui")));

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/dcct-ui/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
