import {fakeManyUsers} from "./user"
import {MariadbDataSource} from "../../src/config"
import {User} from "../../src/app/model";

MariadbDataSource.initialize()
   .then(() => {

      const users = fakeManyUsers(5)
      console.log("--- inserting users and profiles")
      MariadbDataSource.getRepository(User).save(users)
         .then(() => {
            console.log("--- inserted users and profiles successfully")
         })
         .catch((error) => {
            console.error(error)
         })

   })
   .catch((error) => {
      console.log("--- database is dump")
      console.error(error)
      console.log("---------------------")
   })