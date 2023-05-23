import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
