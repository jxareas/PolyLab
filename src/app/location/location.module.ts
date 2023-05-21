import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { CountryComponent } from './country/country.component';
import { DepartmentComponent } from './department/department.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CountryComponent, DepartmentComponent, MunicipalityComponent],
  imports: [CommonModule, LocationRoutingModule, TableModule],
})
export class LocationModule {}
