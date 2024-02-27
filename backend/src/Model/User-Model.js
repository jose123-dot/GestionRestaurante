import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    roles: {
      type: [
        {
          ref: "roles",
          type: Schema.ObjectId,
        },
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//encriptar contraseña
UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
UserSchema.statics.comparepassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("user", UserSchema);
