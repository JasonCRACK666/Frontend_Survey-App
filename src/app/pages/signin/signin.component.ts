import { Component } from '@angular/core'
import { UserSignIn } from '../../models/User.model'

import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  userSignIn: UserSignIn = {
    email: '',
    password: '',
  }

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.onSignIn(this.userSignIn)
  }
}
