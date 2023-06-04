import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsTableComponent } from './mds-table.component';

@NgModule({
  declarations: [MdsTableComponent],
  imports: [CommonModule],
  exports: [MdsTableComponent],
})
export class MdsTableModule {}
