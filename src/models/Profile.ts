import { Schema, model, models,Document,Types } from "mongoose";

export interface IProfile extends Document {
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: number;
  constructionDate: Date;
  category: "villa" | "apartment" | "store" | "office";
  amenities: string[];
  rules: string[];
  userId?: Types.ObjectId; // چون ممکنه همیشه مقدار نداشته باشه
  published: boolean;
  createdAt?: Date; // چون timestamps فعاله
  updatedAt?: Date;
}


const profileSchema = new Schema<IProfile>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office"],
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model<IProfile>("Profile", profileSchema);

export default Profile;