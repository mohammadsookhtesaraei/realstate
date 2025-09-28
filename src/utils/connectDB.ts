import mongoose from "mongoose";


// .env
const MONGO = process.env.MONGO_URI!


// async function
export default async function connectDB() {

    try {
        // if we connect
        if (mongoose.connection.readyState === 1) {
            console.log("Already Connected!");
        }

        mongoose.set("strictQuery", false);
    //    if we not connect? connect
        await mongoose.connect(MONGO);
        console.log("ConnectDB!");



    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            throw error
        }
    }






}