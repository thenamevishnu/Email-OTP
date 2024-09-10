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
    verified: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export const Mail = model("mails", schema)