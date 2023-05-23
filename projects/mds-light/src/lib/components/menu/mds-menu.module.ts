import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsMenuComponent } from './mds-menu.component';
import { MdsMenuItemModule } from '../menu-item/mds-menu-item.module';

@NgModule({
  declarations: [MdsMenuComponent],
  imports: [CommonModule, MdsMenuItemModule],
  exports: [MdsMenuComponent],
})
export class MdsMenuModule {}
