import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsDeleteSingleComponent } from './mds-delete-single.component';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [MdsDeleteSingleComponent],
  imports: [CommonModule, DialogModule, RippleModule, ButtonModule],
  exports : [MdsDeleteSingleComponent]
})
export class MdsDeleteSingleModule {}
