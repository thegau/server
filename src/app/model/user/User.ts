import {AbstractModel} from "../AbstractModel"
import {Column, Entity, OneToOne} from "typeorm"
import {Profile} from "./Profile"

@Entity()
class User extends AbstractModel
{
   @Column({unique: true})
   username: string

   @Column({unique: true})
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