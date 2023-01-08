import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxEchartsModule } from 'ngx-echarts'

import { SignupComponent } from './pages/signup/signup.component'
import { SigninComponent } from './pages/signin/signin.component'
import { HomeComponent } from './pages/home/home.component'
import { DetailSurveyComponent } from './pages/detail-survey/detail-survey.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component'
import { CompleteSurveyComponent } from './pages/complete-survey/complete-survey.component';
import { AnswerSurveyComponent } from './pages/answer-survey/answer-survey.component';

import { NavbarComponent } from './components/navbar/navbar.component'
import { SurveyItemComponent } from './components/survey-item/survey-item.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { OptionItemComponent } from './components/option-item/option-item.component';
import { SurveySuccessfullyCreatedModalComponent } from './components/survey-successfully-created-modal/survey-successfully-created-modal.component';
import { QuestionAnswerItemComponent } from './components/question-answer-item/question-answer-item.component';
import { ModalBlockPageComponent } from './components/modal-block-page/modal-block-page.component';
import { TabSurveyDetailComponent } from './components/tab-survey-detail/tab-survey-detail.component';
import { TabSurveyAnswersComponent } from './components/tab-survey-answers/tab-survey-answers.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ROOT_REDUCERS } from './state/app.state';

import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { QuestionDetailGraphicComponent } from './components/question-detail-graphic/question-detail-graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SurveyItemComponent,
    SurveyListComponent,
    DetailSurveyComponent,
    CreateSurveyComponent,
    QuestionItemComponent,
    OptionItemComponent,
    SurveySuccessfullyCreatedModalComponent,
    AnswerSurveyComponent,
    QuestionAnswerItemComponent,
    ModalBlockPageComponent,
    CompleteSurveyComponent,
    TabSurveyDetailComponent,
    TabSurveyAnswersComponent,
    QuestionDetailComponent,
    QuestionDetailGraphicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
