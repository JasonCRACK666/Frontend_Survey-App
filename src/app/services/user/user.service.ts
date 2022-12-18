import { HttpClient } from '@angular/common/http'
import { Injectable, Inject } from '@angular/core'

import { AppConfig } from 'src/app/AppConfig/appconfig.interface'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service'
import { UserSignIn, UserSignUp } from 'src/app/models/User.model'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  onSignIn(credentials: UserSignIn): void {
    this.http
      .post('/api/auth/signIn', credentials)
      .subscribe(data => console.log(data))
  }

  onSignUp(userData: UserSignUp): void {
    this.http
      .post('/api/auth/signUp', userData)
      .subscribe(data => console.log(data))
  }
}
