import { UserDataInToken } from 'src/app/models/User.model'

export interface AuthState {
  token: string | null
  user: UserDataInToken | null
}