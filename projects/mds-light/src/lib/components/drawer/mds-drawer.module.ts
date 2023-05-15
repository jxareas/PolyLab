import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsDrawerComponent } from './mds-drawer.component';
import { MdsMenuModule } from '../menu/mds-menu.module';

@NgModule({
  declarations: [MdsDrawerComponent],
  imports: [CommonModule, MdsMenuModule],
  exports: [MdsDrawerComponent],
})
export class MdsDrawerModule {}
