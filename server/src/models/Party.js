import mongoose from "mongoose";

const partySchema = mongoose.Schema(
  {
    creator: String,
    members: Array,
  },
  {
    versionKey: false,
  }
);

const Party = mongoose.model("Party", partySchema);

export default Party;
