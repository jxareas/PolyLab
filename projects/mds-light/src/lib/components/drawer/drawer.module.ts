import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [DrawerComponent],
  imports: [CommonModule, MenuModule],
  exports: [DrawerComponent],
})
export class DrawerModule {}
