import {autoInjectable} from "tsyringe"

interface IUserRepository
{

}

@autoInjectable()
class UserRepository implements IUserRepository
{

}

export {UserRepository, IUserRepository}