import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, unique: true },
    password: { type: String, select: false },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
