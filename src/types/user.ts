// export interface UserAuthData {
//   id: string
//   username: string
//   passwordHash: string
// }

// export interface User {
//   id: string
//   username: string
//   authData: UserAuthData
// }



export interface User {
  userId: number
  username: string
}


export interface Login {
  username: string,
  password: string,
}

export interface LoginResponse {
  data: {
    token: string;
    userId: number;
    username: string;
  };
  message: string;
}


export type UserId = Pick<User, 'userId'>;


export interface Token {
  token: string
  expirationDate?: Date
}

export interface AuthenticatedUser extends User {
  token?: Token
}

export interface Users {
  users: User[]
}


export interface AdaptedLoginResponse {
  payload: User;
  token: Token;
}