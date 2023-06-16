import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

import { UserSignIn } from 'src/app/models/User.model'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  loading = false
  showPassword = false
  userSignInForm: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userSignInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })
  }

  get email() {
    return this.userSignInForm.get('email') as FormControl<string | null>
  }

  get password() {
    return this.userSignInForm.get('password') as FormControl<string | null>
  }

  onSubmit(): void {
    if (this.userSignInForm.valid) {
      this.loading = true
      this.userService
        .onSignIn(this.userSignInForm.value as UserSignIn)
        .subscribe({
          next: ({ token }) => {
            this.userService.loginUser(token)
            this.loading = false
            this.router.navigate(['/', 'home'])
          },
          error: ({ error: { error } }) => {
            this._snackBar.open(error, '', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 5000,
            })
            this.loading = false
          },
        })
    }
  }

  haveError(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched)
  }

  onToggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }
}
