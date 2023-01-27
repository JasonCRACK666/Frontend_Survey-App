import { InjectionToken } from '@angular/core'

export const LocalStorageToken = new InjectionToken('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage
  },
})
