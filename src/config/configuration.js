import {resolveEnv} from '../utils/utility.js'

import dotenv from "dotenv";


if (process.env.NODE_ENV !== "production") {
    const result = dotenv.config();

    if (result.error && result.error.code !== "ENOENT") {
        throw result.error;
    }
}

export const configuration = Object.freeze({
    port: Number(resolveEnv("PORT")),
    node_env: resolveEnv("NODE_ENV"),
    mongoUri: resolveEnv("MONGODB_URI"),
    clientUrl: resolveEnv("CLIENT_URL"),
    jwtSecret: resolveEnv("JWT_SECRET"),
    jwtExpiresIn: Number(resolveEnv("JWT_EXPIRES_IN")),
    cookieSecret: resolveEnv("COOKIE_SECRET")
})