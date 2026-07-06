import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";
import FlashCard from 'FlashCard';

const reviewSchema=new mongoose.Schema;


let Review=mongoose.model({
  _id: { type: String, default: crypto.randomUUID },
  flashcardId: { type: String, ref: 'Flashcard', required: true },
 rating: { type: Number, required: true, min: 0, max: 5 },
        easeFactor: { type: Number, required: true },
        intervalDays: { type: Number, required: true },
});

const reviewSchema = new mongoose.Schema(definitionObject, { timestamps: true })

let Review=mongoose.model("Review",reviewSchema);

export default Review;