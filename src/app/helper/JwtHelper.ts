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
   encode(data: any, options?: SignOptions): string {
      return sign({ data: data }, JwtConfig.authSecret, options)
   }

   decode(): any {

   }
}

export {JwtHelper, IJwtHelper}