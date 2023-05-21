import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ExamProfilesComponent } from './exam-profiles/exam-profiles.component';
import { NormalValuesComponent } from './normal-values/normal-values.component';

const routes: Routes = [
  {
    path: 'exam',
    component: ExamComponent,
  },
  {
    path: 'exam-profile',
    component: ExamProfilesComponent,
  },
  {
    path: 'normal-values',
    component: NormalValuesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule {}
