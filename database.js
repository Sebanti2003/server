import mongoose from "mongoose";
export async function database() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("database connected on the backend");
  } catch (error) {
    console.log(error);
  }
}
