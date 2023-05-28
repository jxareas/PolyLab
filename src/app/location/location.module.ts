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
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CountryDialogComponent } from './country/components/country-dialog/country-dialog.component';
import { CountryListComponent } from './country/components/country-list/country-list.component';
import {
  MdsActionToolbarModule
} from "../../../projects/mds-light/src/lib/components/action-toolbar/mds-action-toolbar.module";
import {
  MdsDeleteSingleModule
} from "../../../projects/mds-light/src/lib/components/delete-single/mds-delete-single.module";

@NgModule({
  declarations: [CountryComponent, DepartmentComponent, MunicipalityComponent, CountryDialogComponent, CountryListComponent],
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
    InputTextareaModule
  ]
})
export class LocationModule {}
