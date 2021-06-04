import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Keep Calm 🚧 🚧 this app is all ready building ",
  });
});

app.listen(3333, () => console.log("Server is Running! 🦝"));
