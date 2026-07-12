import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";
import Deck from './deck.model.js';


let flaskCardSchema=new mongoose.Schema({
  _id: { type: String, default: crypto.randomUUID },
  deckId: { type: String, ref: 'Deck', required: true },
  question: { type: String, required: true },
    answer: { type: String, required: true }
},
{ timestamps: true });


const sm2=new mongoose.Schema({
  repetitions: { type: Number, default: 0 },
       easeFactor: { type: Number, default: 2.5 },
       intervalDays: { type: Number, default: 0 },
       nextReviewDate: { type: Date, default: Date.now }
})


let FlashCard=mongoose.model('FlashCard',flaskCardSchema);

export default FlashCard;