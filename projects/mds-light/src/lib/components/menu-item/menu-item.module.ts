import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuItemComponent],
})
export class MenuItemModule {}
