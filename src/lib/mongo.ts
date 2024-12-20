import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Database already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw new Error("Database connection failed");
  }
};
