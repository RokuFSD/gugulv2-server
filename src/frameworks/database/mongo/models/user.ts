import * as mongoose from "mongoose";
import { UserType } from "../../../../entities/user";

const Schema = mongoose.Schema;

const UserSchema = new Schema<UserType>(
  {
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
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserType>("User", UserSchema);
export default UserModel;
