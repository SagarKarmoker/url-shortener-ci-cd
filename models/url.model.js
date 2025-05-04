import mongoose from "mongoose";
import { nanoid } from 'nanoid'

const urlSchema = new mongoose.Schema({
    full: { type: String, required: true },
    short: { type: String, default: nanoid() },
})

const Url = mongoose.model("Url", urlSchema);
export default Url;