import {User, Profile} from "../../../src/app/model"
import { faker } from '@faker-js/faker'
import {fakeOneProfile} from "./ProfileFaker"

function fakeOneUser(profile: Profile): User
{
   const newUser: User = new User()

   newUser.username = faker.internet.userName()
   newUser.email = faker.internet.email()
   newUser.password = faker.internet.password()
   newUser.profile = profile
   profile.user = newUser

   return newUser
}

function fakeManyUsers(numberOfUser: number): User[]
{
   const newUsers: User[] = []

   for (let i = 0; i < numberOfUser; i++) {
      newUsers.push(fakeOneUser(fakeOneProfile()))
   }

   return newUsers
}

export {fakeManyUsers, fakeOneUser}