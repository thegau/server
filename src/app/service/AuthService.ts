interface IAuthService
{

}

class AuthService implements IAuthService
{

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