import "reflect-metadata"
import { DataSource } from "typeorm"

const MariadbDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

export {MariadbDataSource}