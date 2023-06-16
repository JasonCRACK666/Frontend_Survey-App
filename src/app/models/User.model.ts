export interface User {
  id: string
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  is_admin: boolean
}

export interface UserSignIn {
  email: string
  password: string
}

export interface UserSignUp {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
}

export interface UserDataInToken {
  id: string
  username: string
  is_admin: string
}
