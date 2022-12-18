import {CreateDateColumn, UpdateDateColumn} from "typeorm"

class ModelHistory
{
   @CreateDateColumn()
   readonly insertedAt: Date

   @UpdateDateColumn()
   updatedAt: Date
}

export {ModelHistory}