import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";
import FlashCard from './flashCard.model.js';



let reviewSchema=new mongoose.Schema({
  _id: { type: String, default: crypto.randomUUID },
  flashcardId: { type: String, ref: 'Flashcard', required: true },
 rating: { type: Number, required: true, min: 0, max: 5 },
        easeFactor: { type: Number, required: true },
        intervalDays: { type: Number, required: true },
}, { timestamps: true });


let Review=mongoose.model("Review",reviewSchema);

export default Review;