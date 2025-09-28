import { Document, Schema, model, models } from 'mongoose';

// interface type script
interface UserSchemaTypes extends Document {
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}

// create schema
const UserSchema = new Schema<UserSchemaTypes>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'USER',
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

// create model data base like UserSchema
const User = models?.User || model<UserSchemaTypes>('User', UserSchema);

export default User;
