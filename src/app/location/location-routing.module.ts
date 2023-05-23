import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { DepartmentComponent } from './department/department.component';
import { MunicipalityComponent } from './municipality/municipality.component';

const routes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'municipality',
    component: MunicipalityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
