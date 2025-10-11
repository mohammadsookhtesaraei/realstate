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
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('لطفا ایمیل و رمز عبور را وارد کنید');
          }

          // اتصال به دیتابیس یکبار
          await connectDB();

          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error('حساب کاربری یافت نشد. لطفا ثبت نام کنید');
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error('ایمیل یا رمز عبور اشتباه است');
          }

          return {
            id: user._id,
            email: user.email,
          };
        } catch (error: unknown) {
          console.error(
            'Auth Error:',
            error instanceof Error ? error.message : error
          );
          return null; // برگردوندن null یعنی لاگین ناموفق
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
