import {AbstractModel} from "../AbstractModel"
import {Column, Entity, OneToOne, JoinColumn} from "typeorm"
import {User} from "./User"

@Entity()
class Profile extends AbstractModel
{
   @Column()
   fullName: string

   @Column({unique: true})
   avatarUrl: string

   /**
    * relationships
    * - one to one with User, join column
    */

   @OneToOne(() => User)
   @JoinColumn()
   user: User
}

export {Profile}