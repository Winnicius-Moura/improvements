export interface UserAuthData {
  id: string
  username: string
  passwordHash: string
}

export interface User {
  id: string
  username: string
  authData: UserAuthData
}

export type UserId = Pick<User, 'id'>;


export interface Token {
  token: string
  expirationDate: Date
}

export interface AuthenticatedUser extends User {
  token?: Token
}

export interface Users {
  users: User[]
}