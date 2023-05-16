import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: 'patients',
    component: PatientComponent,
  },
  {
    path: 'doctors',
    component: PersonalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsRoutingModule {}
