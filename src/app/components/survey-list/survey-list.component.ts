import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectLoading, selectSurveysList } from 'src/app/state/selectors/survey.selectors';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
})
export class SurveyListComponent {
  loading$ = this.store.select(selectLoading)
  surveys$ = this.store.select(selectSurveysList)

  constructor(private store: Store) { }
}