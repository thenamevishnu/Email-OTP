import { model, Schema } from "mongoose";

const schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    otp: {
        type: Number
    },
    deadline: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export const Mail = model("mails", schema)