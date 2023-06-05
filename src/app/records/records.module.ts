import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from './records-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { PatientComponent } from './patient/patient.component';
import { PersonalTableComponent } from './personal/components/personal-table/personal-table.component';
import { PersonalDialogComponent } from './personal/components/personal-dialog/personal-dialog.component';
import { MdsActionToolbarModule } from 'mds-light';
import { ToastModule } from 'primeng/toast';
import { PatientTableComponent } from './patient/components/patient-table/patient-table.component';
import { PatientDialogComponent } from './patient/components/patient-dialog/patient-dialog.component';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { PatientService } from './patient/service/patient.service';
import { DoctorService } from './personal/service/doctor.service';

@NgModule({
  declarations: [
    PersonalComponent,
    PatientComponent,
    PersonalTableComponent,
    PersonalDialogComponent,
    PatientTableComponent,
    PatientDialogComponent,
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MdsActionToolbarModule,
    ToastModule,
    MessageModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SharedModule,
    TableModule,
  ],
  providers: [PatientService, DoctorService],
})
export class RecordsModule {}
