import { Injectable } from '@angular/core'

import { CanActivate, Router, UrlTree } from '@angular/router'

import { Observable } from 'rxjs'
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token')

    if (!token) {
      this.router.navigate(['/', 'signIn'])
      return false
    }

    return this.userService.isLoggedIn(token)
  }
}
