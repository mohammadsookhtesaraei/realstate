import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import Profile from '@/models/Profile';
import User from '@/models/User';
import connectDB from '@/utils/connectDB';

interface ContextType {
  params: {
    id: string;
  };
}
export async function DELETE(context: ContextType) {
  try {
    await connectDB();
    const id = context.params.id;

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

    const profile = await Profile.findOne({ _id: id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        {
          error: 'دستری شما به این آگهی محدود شده است',
        },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: 'آگهی موردنظر حذف شد' },
      { status: 200 }
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
