import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import mongoose from 'mongoose';
const app=express();
let port=process.env.PORT;

const dbUrl=process.env.MONGO_URI;

main();
async function main() {
  return await mongoose.connect(dbUrl);
}

// console.log(dbUrl)

app.listen(port,()=>{
  console.log(`app listening at ${port}`);
})
