import { transporter } from "../Configs/mail.config.mjs";

export const sendOTP = async (to) => {
    const min = 100000; const max = 999999;
    const otp = Math.floor(Math.random() * (max - min)) + min
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: to,
        subject: subject || "Email Verification",
        html: <h1></h1>
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                reject({status: false, message: err.message})
            } else {
                resolve({status: true, message: res.response})
            }
        })
    })
}