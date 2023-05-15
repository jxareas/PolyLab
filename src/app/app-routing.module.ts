import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./panel/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
