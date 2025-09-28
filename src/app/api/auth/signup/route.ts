import { NextResponse } from "next/server";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";


export async function POST(req: Request) {

    try {

        // connectDb
        await connectDB();

        // get data from  request body from client
        const { email, password } = await req.json();


        // validation data
        if (!email || !password) {
            return NextResponse.json(
                { error: "لطفا اطلاعات معتبر وارد کنید" },
                { status: 422 }
            );
        };

        // check user

        const exitingUser = await User.findOne({ email });

        // validation user
        if (exitingUser) {
            return NextResponse.json(
                { error: "این حساب کاربری وجود دارد" },
                { status: 422 }
            );
        };

        // hash password
        const hashedPassword = await hashPassword(password);

        // create new user
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });

        console.log(newUser);

        //  return response

        return NextResponse.json(
            { message: "حساب کاربری ایجاد شد" },
            { status: 201 }
        );



        // error
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            return NextResponse.json(
                { error: "مشکلی در سرور رخ داده است" },
                {
                    status: 500,
                }
            );
        }

    }



}