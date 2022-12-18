require("dotenv").config()

const JwtConfig: any = Object.freeze({
   authSecret: process.env.JWT_AUTH_SECRET
})

export {JwtConfig}