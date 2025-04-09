import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello Ilham",
    status: "success",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
