import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    size: { type: Number, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;
