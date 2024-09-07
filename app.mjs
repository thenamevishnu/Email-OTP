import express from "express"

const app = express()

app.listen(process.env.PORT || 8080, err => {
    if (err) return process.exit(1)
    console.log("Running...")
})