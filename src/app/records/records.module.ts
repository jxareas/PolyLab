import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    PersonalComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule { }
