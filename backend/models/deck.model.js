import mongoose from "mongoose";
import crypto from 'crypto';
import { timeStamp } from "console";
import User from 'User';

let DECK_SCHEMA=mongoose.Schema;

let deck=mongoose.model({
  _id: {
    type: String,
    default: crypto.randomUUID
},
userId:{
  type:String,
  ref='User',
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
})

const deckSchema = new mongoose.Schema(definitionObject, { timestamps: true })

const Deck=mongoose.model("Deck",DECK_SCHEMA);
export default Deck;