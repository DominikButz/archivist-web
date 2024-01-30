require("nodemailer") 
import nodemailer from "nodemailer"

export const email = process.env.SUPPORT_USER
const host = process.env.SUPPORT_HOST
const pass = process.env.SUPPORT_PASS

export const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: email, 
        pass: pass // from .env.local
    }
})






