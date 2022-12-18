import {AbstractController} from "./AbstractController"
import {Request, Response, Router} from "express"
import {AuthService, IAuthService} from "../service"
import {autoInjectable} from "tsyringe"
import {AuthToken} from "../@type"
import {User} from "../model"

@autoInjectable()
class AuthController extends AbstractController
{
   private readonly authService: IAuthService

   constructor(authService: AuthService) {
      super()
      this.authService = authService
   }

   routes = (): Router => {
      this.router.post("/sign-up", this.signUp)
      return this.router
   }

   signUp = async (req: Request, res: Response): Promise<Response<AuthToken>> => {
      const newUser: User = new User()
      newUser.username = req.body.username
      newUser.email = req.body.email
      newUser.password = req.body.password

      return res.send(await this.authService.signUp(newUser))
   }

}

export {AuthController}