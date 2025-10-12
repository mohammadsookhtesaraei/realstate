import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import mongoose from "mongoose";

interface ContextType {
  params: {
    profileId: string;
  };
}

export async function DELETE(req: NextRequest, context: ContextType) {
  try {
    await connectDB();

    const id = context.params.profileId;

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    const profile = await Profile.findById(id);
    if (!profile) {
      return NextResponse.json(
        { error: "آگهی موردنظر یافت نشد" },
        { status: 404 }
      );
    }

    if (!user._id.equals(profile.userId as mongoose.Types.ObjectId)) {
      return NextResponse.json(
        { error: "دستری شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
