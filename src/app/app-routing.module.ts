import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CompletedSurveyGuard } from './guards/completed-survey.guard'

import { IsAuthGuard } from './guards/is-auth.guard'
import { AnswerSurveyComponent } from './pages/answer-survey/answer-survey.component'
import { CompleteSurveyComponent } from './pages/complete-survey/complete-survey.component'
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component'
import { DetailSurveyComponent } from './pages/detail-survey/detail-survey.component'

import { HomeComponent } from './pages/home/home.component'
import { SigninComponent } from './pages/signin/signin.component'
import { SignupComponent } from './pages/signup/signup.component'

const routes: Routes = [
  {
    path: 'signUp',
    component: SignupComponent,
  },
  {
    path: 'signIn',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'survey/create',
    component: CreateSurveyComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'survey/completed',
    component: CompleteSurveyComponent,
    canActivate: [IsAuthGuard]
  },
  {
    path: 'survey/:surveyId',
    component: DetailSurveyComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'survey/:surveyId/answer',
    component: AnswerSurveyComponent,
    canActivate: [IsAuthGuard, CompletedSurveyGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
