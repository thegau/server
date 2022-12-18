import "reflect-metadata"
import { DataSource } from "typeorm"
import {DatabaseConfig} from "../env"

const MariadbDataSource = new DataSource({
    ...DatabaseConfig,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

export {MariadbDataSource}