import { createReducer, on } from '@ngrx/store'

import { login, logOut, setUser } from '../actions/auth.actions'

import { AuthState } from '../models/auth.state'

export const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
}

export const authReducers = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, user })),
  on(login, (state, { token }) => ({ ...state, token })),
  on(logOut, () => ({ token: null, user: null }))
)
