import { model, models, Schema, Document } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image?: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}
export interface IUserDoc extends IUser, Document {}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    portfolio: {
      type: String,
      required: false,
    },
    reputation: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

export const User = models.User || model<IUser>("User", UserSchema);
