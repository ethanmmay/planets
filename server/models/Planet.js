import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Planet = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    system: { type: ObjectId, ref: "SolarSystem", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
