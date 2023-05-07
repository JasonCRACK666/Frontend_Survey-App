import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

import { UserSignUp } from 'src/app/models/User.model'

import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  loading = false
  showPassword = false
  userSignUpForm: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userSignUpForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    })
  }

  get firstName() {
    return this.userSignUpForm.get('first_name') as FormControl<string | null>
  }

  get lastName() {
    return this.userSignUpForm.get('last_name') as FormControl<string | null>
  }

  get username() {
    return this.userSignUpForm.get('username') as FormControl<string | null>
  }

  get email() {
    return this.userSignUpForm.get('email') as FormControl<string | null>
  }

  get password() {
    return this.userSignUpForm.get('password') as FormControl<string | null>
  }

  onSubmit(): void {
    console.log('Hello')
    if (this.userSignUpForm.valid) {
      this.loading = true
      this.userService
        .onSignUp(this.userSignUpForm.value as UserSignUp)
        .subscribe({
          next: ({ message }) => {
            console.log(message)
            this.router.navigate(['/', 'signIn'])
          },
          error: err => {
            console.log(err)
            this._snackBar.open(err, '', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 5000,
            })
          },
          complete: () => {
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
