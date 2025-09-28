import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import { verifyPassword } from '@/utils/auth';
import connectDB from '@/utils/connectDB';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('لطفا اطلاعات معتبر وارد کنید');
        }
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          if (error instanceof Error) {
            console.error('Database connection error:', error.message);
          }
          throw new Error('خطای سرور. لطفا دوباره تلاش کنید.');
        }

        if (!email || !password) {
          throw new Error('لطفا اطلاعات معتبر وارد کنید');
        }

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('لطفا حساب کاربری ایجاد کنید');
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error('نام کاربری یا رمز عبور اشتباه است');
        }

        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
