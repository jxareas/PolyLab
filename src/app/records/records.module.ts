import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from './records-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { PatientComponent } from './patient/patient.component';
import { PersonalTableComponent } from './personal/components/personal-table/personal-table.component';
import { PersonalDialogComponent } from './personal/components/personal-dialog/personal-dialog.component';
import { MdsActionToolbarModule, MdsDeleteSingleModule } from 'mds-light';
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
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../location/country/service/country.service';
import { DepartmentService } from '../location/department/service/department.service';
import { MunicipalityService } from '../location/municipality/service/municipality.service';
import { ProfessionService } from '../categories/profession/service/profession.service';
import { CalendarModule } from "primeng/calendar";
import { ReligionService } from "../categories/religion/service/religion.service";
import { InputTextareaModule } from "primeng/inputtextarea";

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
    MdsDeleteSingleModule,
    DialogModule,
    ToastModule,
    MessageModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SharedModule,
    TableModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule
  ],
  providers: [
    PatientService,
    DoctorService,
    CountryService,
    DepartmentService,
    MunicipalityService,
    ProfessionService,
    ReligionService,
  ],
})
export class RecordsModule {}
