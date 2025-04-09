import express from "express";

const app = express();

const port = 5000;

const users = [
  { id: 1, name: "Ilham", email: "ilham@example.com" },
  { id: 2, name: "Dean", email: "dean@example.com" },
  { id: 3, name: "Ade", email: "ade@example.com" },
  { id: 4, name: "Mada", email: "mada@example.com" },
  { id: 5, name: "Adel", email: "adel@example.com" },
];

app.get("/", (req, res) => {
  res.json({
    message: "Hello Ilham Rafi",
    status: "success",
    data: {
      endpoints: ["/users"],
    },
  });
});

app.get("/users", (req, res) => {
  res.json({
    message: "List of users",
    status: "success",
    data: users,
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
