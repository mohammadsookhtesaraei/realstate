import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import User from '@/models/User';
import Profile from '@/models/Profile';
import connectDB from '@/utils/connectDB';
import { Types } from 'mongoose';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = body;

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'لطفا وارد حساب کاربری خود بشید' },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user?.email });
    if (!user) {
      return NextResponse.json(
        { error: 'حساب کاربری یافت نشد' },
        { status: 404 }
      );
    }

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: user._id
    });
    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'خطای ناشناخته';

    console.error(message);

    return NextResponse.json(
      { error: 'مشکلی در سرور رخ داده است' },
      { status: 500 }
    );
  }
}
