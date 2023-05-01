import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    user: String,
    body: String,
  },
  {
    versionKey: false,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
