import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const SolarSystem = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    galaxy: { type: ObjectId, ref: "Galaxy", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default SolarSystem;
