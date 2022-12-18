import {Profile} from "../../../src/app/model"
import {faker} from "@faker-js/faker"

function fakeOneProfile(): Profile
{
   const newProfile = new Profile()

   newProfile.avatarUrl = faker.internet.avatar()
   newProfile.fullName = faker.internet.userName()

   return newProfile
}

function fakeManyProfile(): Profile[]
{
   return []
}

export {fakeOneProfile, fakeManyProfile}