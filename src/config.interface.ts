interface ApiConfigProps {
    apiUrl: string
    httpTimeout: number
}

interface MongodbConfigProps {
    host: string,
    port: number,
    databaseName: string
}

interface JwtProps {
    secret: string
}

export interface ConfigProps {
    port: number,
    cors_origin: string,
    api: ApiConfigProps
    mongodb: {
        database: MongodbConfigProps
    },
    jwt: JwtProps
}