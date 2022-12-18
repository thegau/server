import "reflect-metadata"
import { DataSource } from "typeorm"
import {DatabaseConfig} from "../env"
import {Profile, User} from "../app/model";


const MariadbDataSource = new DataSource({
    ...DatabaseConfig,
    synchronize: true,
    logging: false,
    entities: [User, Profile],
    migrations: [],
    subscribers: [],
})

export {MariadbDataSource}