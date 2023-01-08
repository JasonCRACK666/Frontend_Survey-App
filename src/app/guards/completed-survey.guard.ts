import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

import { catchError, map, Observable, of } from 'rxjs';
import { ModalBlockPageComponent } from '../components/modal-block-page/modal-block-page.component';

import { SurveyService } from '../services/survey.service';

@Injectable({
  providedIn: 'root'
})
export class CompletedSurveyGuard implements CanActivate {
  constructor(
    private surveyService: SurveyService,
    private router: Router,
    public modalCompletedSurvey: MatDialog
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { surveyId } = route.params
    return this.surveyService.completedSurvey(surveyId).pipe(
      map(res => {
        if (res.isCompleted) {
          const modal = this.modalCompletedSurvey.open(ModalBlockPageComponent, {
            data: { message: 'Usted ya ha completado esta encuesta' }
          })

          modal.afterClosed().subscribe(() => {
            this.router.navigate(['/', 'home'])
          })

          return false
        }

        return true
      }),
      catchError(() => {
        this.router.navigate(['/', 'home'])
        return of(false)
      })
    )
  }
}
