import { ConfigProps } from "./config.interface";

export const config = ():ConfigProps => ({
    port: parseInt(process.env.PORT, 10) || 8080,
    cors_origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    api: {
        apiUrl: process.env.API_URL,
        httpTimeout: 1000
    },
    mongodb: {
        database: {
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT, 10) || 27017,
            databaseName: process.env.DB_NAME || 'local'
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET_KEY
    }

})