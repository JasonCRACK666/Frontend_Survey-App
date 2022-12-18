import { Component } from '@angular/core'
import { UserSignUp } from 'src/app/models/User.model'

import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userSignUp: UserSignUp = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  }

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.onSignUp(this.userSignUp)
  }
}
