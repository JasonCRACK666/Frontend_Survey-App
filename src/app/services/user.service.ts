import { HttpClient } from '@angular/common/http'
import { Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { catchError, map, Observable, of } from 'rxjs'

import { AppConfig } from 'src/app/AppConfig/appconfig.interface'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service'
import {
  UserDataInToken,
  UserSignIn,
  UserSignUp,
} from 'src/app/models/User.model'
import { login, setUser } from '../state/actions/auth.actions'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  onSignIn(
    credentials: UserSignIn
  ): Observable<{ status: number; token: string }> {
    return this.http.post<{ status: number; token: string }>(
      '/api/auth/signIn',
      credentials
    )
  }

  onSignUp(
    userData: UserSignUp
  ): Observable<{ status: number; message: string }> {
    return this.http.post<{ status: number; message: string }>(
      '/api/auth/signUp',
      userData
    )
  }

  getUserWithToken(): Observable<{ status: number; user: UserDataInToken }> {
    return this.http.get<{ status: number; user: UserDataInToken }>(
      '/api/auth/users/me',
      {
        headers: {
          Authorization: localStorage.getItem('token')
            ? `Bearer ${localStorage.getItem('token')}`
            : '',
        },
      }
    )
  }

  isLoggedIn(token: string): Observable<boolean> {
    return this.http
      .post<{ status: number }>('/api/auth/verify', { token })
      .pipe(
        map(() => {
          this.store.dispatch(login({ token }))
          this.getUserWithToken().subscribe(({ user }) => {
            this.store.dispatch(setUser({ user }))
          })
          return true
        }),
        catchError(() => {
          this.router.navigate(['signIn'])
          return of(false)
        })
      )
  }

  loginUser(token: string): void {
    localStorage.setItem('token', token)
  }

  logOut(): void {
    localStorage.removeItem('token')
  }
}
