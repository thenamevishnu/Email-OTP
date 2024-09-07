import { sendOTP } from "../Utils/mail.mjs"

export const sendOtpToEmail = async (request, response) => {
    try {
        const { to } = request.body
        const response = await sendOTP()
    } catch (err) {
        return response.status(500).send({
            message: "Internal server error"
        })
    }
}