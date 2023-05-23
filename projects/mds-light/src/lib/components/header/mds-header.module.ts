import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsHeaderComponent } from './mds-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [MdsHeaderComponent],
  imports: [CommonModule, RouterLink],
  exports: [MdsHeaderComponent],
})
export class MdsHeaderModule {}
