import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, map, of } from 'rxjs';

import { SurveyDetailDataAnswers } from 'src/app/models/Survey.model';

import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-detail-survey',
  templateUrl: './detail-survey.component.html'
})
export class DetailSurveyComponent implements OnInit {
  loadingData = true
  surveyData!: SurveyDetailDataAnswers

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const { surveyId } = this.route.snapshot.params
    this.answerService.surveyDataAnswers(surveyId).pipe(
      map(({ survey }) => survey),
      catchError((error) => {
        this.router.navigate(['/', 'home'])
        console.log(error)
        this.loadingData = false
        return of()
      })
    ).subscribe(survey => {
      this.loadingData = false
      this.surveyData = survey
    })
  }
}
