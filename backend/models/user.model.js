import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";


let USER_SCHEMA=mongoose.Schema;

let user=mongoose.model({
  _id: {
    type: String,
    default: crypto.randomUUID
},
email: { type: String, required: true, unique: true, lowercase: true, trim: true },
passwordHash: { type: String, required: true },
plan: { type: String, enum: ['free', 'paid'], default: 'free' },
})

const userSchema = new mongoose.Schema(definitionObject, { timestamps: true })

const User=mongoose.model("User",USER_SCHEMA);
export default User;