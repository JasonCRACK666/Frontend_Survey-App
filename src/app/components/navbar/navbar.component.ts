import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { UserService } from 'src/app/services/user.service'
import { logOut } from 'src/app/state/actions/auth.actions'
import { selectUser } from 'src/app/state/selectors/auth.selectors'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    private userServices: UserService,
    private router: Router,
    private store: Store
  ) { }

  user$ = this.store.select(selectUser)

  onLogOut(): void {
    this.userServices.logOut()
    this.store.dispatch(logOut())
    this.router.navigate(['/', 'signIn'])
  }
}
