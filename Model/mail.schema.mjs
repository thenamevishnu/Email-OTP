import { model, Schema } from "mongoose";

const schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    otp: {
        type: String
    }
}, {
    timestamps: true
})

export const Mail = model("mails", schema)