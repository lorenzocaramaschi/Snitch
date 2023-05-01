import express, { json, urlencoded } from "express";
import config from "./config/config.js";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";

const DB = config.db;
const PORT = config.port;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

await mongoose.connect(DB).then(
  () => {
    console.log(`Database connected!`);
  },
  (err) => {
    console.log(`There was an error: ${err}`);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});
