import {Repository} from "typeorm"
import {MariadbDataSource} from "../../config"

abstract class AbstractRepository<T>
{
   protected readonly self: Repository<T>

   protected constructor(repoType: any) {
      this.self = MariadbDataSource.getRepository<T>(repoType)
   }
}

export {AbstractRepository}