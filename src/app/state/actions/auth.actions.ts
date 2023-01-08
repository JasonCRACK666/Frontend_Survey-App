import { createAction, props } from '@ngrx/store'
import { UserDataInToken } from '../../models/User.model'

export const setUser = createAction(
  'Set user',
  props<{ user: UserDataInToken }>()
)

export const login = createAction(
  'Set access token',
  props<{ token: string }>()
)

export const logOut = createAction(
  'Remove token and user'
)
