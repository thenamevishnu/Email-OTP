import { Mail } from "../Model/mail.schema.mjs"
import { mailRegex, sendOTP } from "../Utils/mail.mjs"

export const send = async (request, response) => {
    try {
        const { email } = request.query
        if (!email) return response.status(400).send({
            status: false,
            message: "Email is required!"
        })
        if (!mailRegex.test(email)) return response.status(400).send({
            status: false,
            message: "Enter a valid email!"
        })
        const res = await sendOTP(email)
        return response.status(200).send(res)
    } catch (err) {
        console.log(err.message)
        return response.status(500).send({
            message: "Internal server error"
        })
    }
}

export const verify = async (request, response) => {
    try {
        const { email, otp } = request.query
        if (!email || !otp) return response.status(400).send({
            status: false,
            message: "Email and OTP are required!"
        })
        if (!mailRegex.test(email)) return response.status(400).send({
            status: false,
            message: "Enter a valid email!"
        })
        const res = await Mail.findOne({ email })
        if (!res) return response.status(404).send({
            status: false,
            message: "Not found"
        })
        const currentTime = Math.floor(new Date().getTime() / 1000)
        if (currentTime > res.deadline) return response.status(400).send({
            status: false,
            message: "Invalid otp!"
        })
        if (res.otp == otp) {
            if (res.verified) {
                return response.status(200).send({
                    status: true,
                    message: "You're already verified"
                })
            }
            await Mail.updateOne({ email }, { $set: { verified: true } })
            return response.status(200).send({
                status: true,
                message: "verified"
            })
        }
        return response.status(400).send({
            status: false,
            message: "Invalid OTP"
        }) 
    } catch (err) {
        console.log(err.message)
        return response.status(500).send({
            message: "Internal server error"
        })
    }
}

export default {
    send,
    verify
}