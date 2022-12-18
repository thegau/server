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

}

export {JwtHelper}