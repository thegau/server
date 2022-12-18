import {autoInjectable} from "tsyringe"
import {sign, SignOptions} from "jsonwebtoken"
import {JwtConfig} from "../../env/JwtConfig"

interface IJwtHelper
{
   encode(payload: any, options?: SignOptions): any
   decode(): any
}

@autoInjectable()
class JwtHelper implements IJwtHelper
{
   encode(payload: any, options?: SignOptions): string {
      return sign(payload, JwtConfig.authSecret, options)
   }

   decode(): any {

   }
}

export {JwtHelper, IJwtHelper}