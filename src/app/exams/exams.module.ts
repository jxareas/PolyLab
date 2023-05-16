import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { NormalValuesComponent } from './normal-values/normal-values.component';
import { ExamProfilesComponent } from './exam-profiles/exam-profiles.component';
import { ExamComponent } from './exam/exam.component';


@NgModule({
  declarations: [
    NormalValuesComponent,
    ExamProfilesComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule
  ]
})
export class ExamsModule { }
