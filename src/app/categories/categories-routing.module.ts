import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderComponent } from "./gender/gender.component";
import { ProfessionComponent } from "./profession/profession.component";
import { ReligionComponent } from "./religion/religion.component";

const routes: Routes = [
  {
    path: 'gender',
    component: GenderComponent,
  },
  {
    path: 'profession',
    component: ProfessionComponent,
  },
  {

    path: 'religion',
    component: ReligionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
