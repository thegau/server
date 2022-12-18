import {Router} from "express"

abstract class AbstractController
{
   protected router: Router

   protected constructor() {
      this.router = Router()
   }

   abstract routes(): Router
}

export {AbstractController}