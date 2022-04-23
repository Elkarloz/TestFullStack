import mongoose, { Schema, model } from "mongoose";

export interface IUser extends mongoose.Document {
  userEmail: string;
  userPassword: string;
  userRol: string;
}

const UserSchema = new Schema({
  userEmail: String,
  userPassword: String,
  userRol: String,
});

export default model<IUser>("User", UserSchema);
