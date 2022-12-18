import {AbstractController} from "./AbstractController"
import {Router} from "express"

class AuthController extends AbstractController
{
   constructor() {
      super();
   }

   routes = (): Router => {
      return this.router
   }
}

export {AuthController}