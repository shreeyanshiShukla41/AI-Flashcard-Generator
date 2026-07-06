import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";
import Deck from 'Deck';

const flaskCardSchema=new mongoose.Schema;


let flashCard=mongoose.model({
  _id: { type: String, default: crypto.randomUUID },
  deckId: { type: String, ref: 'Deck', required: true },
  question: { type: String, required: true },
    answer: { type: String, required: true }
});


const sm2=mongoose.model({
  repetitions: { type: Number, default: 0 },
       easeFactor: { type: Number, default: 2.5 },
       intervalDays: { type: Number, default: 0 },
       nextReviewDate: { type: Date, default: Date.now }
})


const flashCardSchema = new mongoose.Schema(definitionObject, { timestamps: true })

let FlashCard=mongoose.model('FlashCard',flaskCardSchema);

export default FlashCard;