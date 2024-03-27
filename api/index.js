import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Nelson:Gracealloverme123@lofty-blog.j76pcev.mongodb.net/?retryWrites=true&w=majority&appName=lofty-blog"
  )
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
