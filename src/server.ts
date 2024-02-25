import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed ");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("ERROR on connection mongoDB", err));
  /*
console.log("Exucuted"); 

import moment from 'moment';
 const currentTime = moment().format ("YYYY MM DD");
 console.log(currentTime);

const person: string = "ALex";
 const count: number = 100;
 */
 
/*
//Architectoral pattern : MVC, DI, MVP
Architectoral pattern -> Bu butin bir malumotlar oqimini tartibga soladigan arxitektural vosita
Backenda -> Beckendning suyagi

// Design Patern: Middkleware, Decotar
Design Patern: Esa loiahadagi ma'lum bir bo'lagini taribga solishda ishlatiladigan vosita 
*/