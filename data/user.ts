import { User } from '../interfaces/user'
import { Chance } from 'chance'

const chance = new Chance()

const mainUser: User = 
{
  firstName: 'Main',
  lastName: 'User',
  username: 'mainUser',
  password: 'test123',
} as User

const hrUser: User = 
{
  firstName: 'HR',
  lastName: 'User',
  username: 'hrUser',
  password: 'test123',
} as User

const randomUser: User = 
{
  firstName: chance.first(),
  lastName: chance.last(),
  username: chance.first() + chance.last(),
  password: 'test123',
} as User

const validEmployee: User = 
{
  firstName: 'Valid',
  lastName: 'Employee',
  username: 'validEmployee',
  password: 'test123',
} as User

const invalidEmployee: User = 
{
  firstName: 'Invalid',
  lastName: 'Employee',
  username: 'invalidEmployee',
  password: 'test123',
} as User

export function getMainUser(): User {
  let main: User = mainUser
  return main
}

export function getHrUser(): User {
    let hr: User = hrUser
    return hr
}

export function getRandomUser(): User {
    let random: User = randomUser
    return random
}

export function getValidEmployee(): User {
    let employee: User = validEmployee
    return employee
}
export function getInvalidEmployee(): User {
    let employee: User = invalidEmployee
    return employee
}