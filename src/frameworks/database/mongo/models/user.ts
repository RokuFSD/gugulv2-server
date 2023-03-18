import * as mongoose from "mongoose";
import { Card } from "../../../../entities/card";

const Schema = mongoose.Schema;

export interface UserDoc extends mongoose.Document {
  googleId: string;
  name: string;
  password: string;
  email: string;
  favorites: Card[];
  image: string;
}

const UserSchema = new Schema(
  {
    googleId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    favorites: {
      type: [
        {
          _id: {
            type: String,
            required: [true, "Card id is required"],
            unique: true,
          },
          card_type: String,
          data: Object,
        },
      ],
      required: false,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDoc>("User", UserSchema);
export default UserModel;
