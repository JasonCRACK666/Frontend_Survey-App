import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'

import {
  loadDone,
  loadStart,
  setSurveys,
} from 'src/app/state/actions/survey.actions'
import { SurveyService } from 'src/app/services/survey.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.store.dispatch(loadStart())
    this.surveyService.getAllSurveys().subscribe(({ surveys }) => {
      this.store.dispatch(setSurveys({ surveys }))
      this.store.dispatch(loadDone())
    })
  }
}
