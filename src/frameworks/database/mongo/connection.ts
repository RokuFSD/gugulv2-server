import mongoose from "mongoose";
import config from "../../../config/config";

export default function mongoDbConnection() {
  function connectToMongo() {
    mongoose.set("strictQuery", false);
    mongoose.connect(config.mongoURI).catch((err) => {
      throw err;
    });
  }

  mongoose.connection.on("connected", () => {
    console.info("MongoDB connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
    void mongoose.disconnect();
  });

  mongoose.connection.on("disconnected", () => {
    console.info("MongoDB disconnected - trying to reconnect");
    setTimeout(connectToMongo, 5000);
  });

  mongoose.connection.on("reconnected", () => {
    console.info("MongoDB reconnected");
  });

  return {
    connectToMongo,
  };
}
