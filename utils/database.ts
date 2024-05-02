import mongoose from "mongoose";

let isConnected = false; // to track the cnnection to the database

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB is already connected");
  }
  try {
    await mongoose.connect("mongodb+srv://sweetsound:sweetsound111@cluster0.puqt3.mongodb.net/?retryWrites=true&w=majority", {
        dbName: "course_allocationDB",
    useNewUrlParser: true,  // Update this line
    useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("db is connected");
  } catch (error) {
    console.log("db", error);
  }
};
