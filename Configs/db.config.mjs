import { connect } from "mongoose"

export const config = async () => {
    try {
        const res = await connect(process.env.DB_URL, {
            dbName: "MailOTP"
        })
        console.log(res.connection.db.databaseName, "Connected");
    } catch (err) {
        console.log(err.message)
        return process.exit(1)
    }
}