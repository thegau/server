import {AbstractModel} from "../AbstractModel"
import {Column, Entity, OneToOne} from "typeorm"
import {Profile} from "./Profile"

@Entity()
class User extends AbstractModel
{
   @Column()
   username: string

   @Column()
   email: string

   @Column()
   password: string

   /**
    * relationship
    * - one-to-one with Profile
    */

   @OneToOne(() => Profile, {cascade: true})
   profile: Profile
}

export {User}