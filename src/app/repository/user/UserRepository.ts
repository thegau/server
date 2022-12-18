import {autoInjectable} from "tsyringe"
import {AbstractRepository} from "../AbstractRepository"
import {User} from "../../model"

interface IUserRepository
{
   createOne(newUser: User): Promise<User>
}

@autoInjectable()
class UserRepository extends AbstractRepository<User> implements IUserRepository
{
   constructor() {
      super(User)
   }

   createOne(newUser: User): Promise<User> {
      return this.self.save(newUser)
   }
}

export {UserRepository, IUserRepository}