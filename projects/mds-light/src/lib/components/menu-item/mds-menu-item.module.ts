import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsMenuItemComponent } from './mds-menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MdsMenuItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [MdsMenuItemComponent],
})
export class MdsMenuItemModule {}
