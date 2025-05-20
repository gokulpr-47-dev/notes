import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    heading: {
      type: String,
      required: [true, "Heading is required"],
    },
    note: {
      type: String,
      required: [true, "Note content is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Note", noteSchema);
