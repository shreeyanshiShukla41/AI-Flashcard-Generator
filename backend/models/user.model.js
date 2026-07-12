import mongoose from "mongoose";
import crypto from "crypto";
import { timeStamp } from "console";


let userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: crypto.randomUUID,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    plan: { type: String, enum: ["free", "paid"], default: "free" },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
