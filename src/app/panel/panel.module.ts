import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import {
  MdsConfigurationModule,
  MdsDrawerModule,
  MdsFooterModule,
  MdsHeaderModule,
} from '../../../projects/mds-light/src/public-api';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MdsHeaderModule,
    MdsDrawerModule,
    MdsConfigurationModule,
    MdsFooterModule,
    RouterModule,
  ],
})
export class PanelModule {}
