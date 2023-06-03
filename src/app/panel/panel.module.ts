import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MdsHeaderModule, MdsDrawerModule, MdsFooterModule, MdsConfigurationModule } from "mds-light";
import { DrawerComponent } from "./drawer/drawer.component";

@NgModule({
  declarations: [LayoutComponent, DrawerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MdsHeaderModule,
    MdsDrawerModule,
    MdsConfigurationModule,
    MdsFooterModule,
    RouterModule,
  ],
})
export class PanelModule {}
