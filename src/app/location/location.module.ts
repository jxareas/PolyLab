import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { CountryComponent } from './country/country.component';
import { DepartmentComponent } from './department/department.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CountryDialogComponent } from './country/components/country-dialog/country-dialog.component';
import { CountryTableComponent } from './country/components/country-table/country-table.component';
import { MdsActionToolbarModule, MdsDeleteSingleModule } from 'mds-light';
import { DepartmentTableComponent } from './department/components/department-table/department-table.component';
import { DepartmentDialogComponent } from './department/components/department-dialog/department-dialog.component';
import { MunicipalityTableComponent } from './municipality/components/municipality-table/municipality-table.component';
import { MunicipalityDialogComponent } from './municipality/components/municipality-dialog/municipality-dialog.component';
import { MessageModule } from 'primeng/message';
import { CountryService } from './country/service/country.service';
import { MunicipalityService } from "./municipality/service/municipality.service";
import { DepartmentService } from "./department/service/department.service";

@NgModule({
  declarations: [
    CountryComponent,
    DepartmentComponent,
    MunicipalityComponent,
    CountryDialogComponent,
    CountryTableComponent,
    DepartmentTableComponent,
    DepartmentDialogComponent,
    MunicipalityTableComponent,
    MunicipalityDialogComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    InputTextModule,
    RippleModule,
    RatingModule,
    FormsModule,
    MdsActionToolbarModule,
    MdsDeleteSingleModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    MessageModule,
    ReactiveFormsModule
  ],
  providers: [CountryService, MunicipalityService, DepartmentService],
})
export class LocationModule {}
