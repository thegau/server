import {Column, PrimaryGeneratedColumn} from "typeorm"
import {ModelHistory} from "./ModelHistory"

abstract class AbstractModel
{
   @PrimaryGeneratedColumn("uuid")
   readonly id: string

   @Column(() => ModelHistory, {prefix: false})
   history: ModelHistory
}

export {AbstractModel}