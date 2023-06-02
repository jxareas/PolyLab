import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import {
  MdsConfigurationModule,
  MdsDrawerModule,
  MdsFooterModule,
  MdsHeaderModule,
} from 'mds-light';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LayoutComponent],
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
