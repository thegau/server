import {autoInjectable} from "tsyringe"
import {User} from "../model"
import {IUserRepository, UserRepository} from "../repository"
import {AuthToken} from "../@type"
import {IJwtHelper, JwtHelper} from "../helper"

interface IAuthService
{
   signUp(user: User): Promise<AuthToken>
}

@autoInjectable()
class AuthService implements IAuthService
{
   private readonly userRepo: IUserRepository
   private readonly jwtHelper: IJwtHelper

   constructor(userRepo: UserRepository, jwtHelper: JwtHelper) {
      this.userRepo = userRepo
      this.jwtHelper = jwtHelper
   }

   private createAuthToken(user: User): AuthToken {
      return {
         accessToken: this.jwtHelper.encode(user),
         refreshToken: this.jwtHelper.encode(user)
      }
   }

   async signUp(newUser: User): Promise<AuthToken> {
      newUser = await this.userRepo.createOne(newUser)
      return this.createAuthToken(newUser)
   }
}

export {AuthService, IAuthService}