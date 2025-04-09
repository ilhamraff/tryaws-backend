import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello Ilham",
    status: "success",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
