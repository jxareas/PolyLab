import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemModule } from './menu-item/menu-item.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuItemModule],
  exports: [MenuComponent],
})
export class MdsMenuModule {}
