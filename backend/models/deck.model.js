import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";
import User from './user.model.js';


let deckSchema=new mongoose.Schema({
  _id: {
    type: String,
    default: crypto.randomUUID
},
userId:{
  type:String,
  ref:'User',
 reference:true,
},
title:{
  type:String,
  trim:true
},
status:{
  type:String,
  enum:['processing', 'ready', 'failed'], default: 'ready'
}
}, { timestamps: true })


const Deck=mongoose.model("Deck",deckSchema);
export default Deck;