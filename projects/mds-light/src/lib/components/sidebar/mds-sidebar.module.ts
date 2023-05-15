import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MdsMenuModule } from '../menu/mds-menu.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, MdsMenuModule],
  exports: [SidebarComponent],
})
export class MdsSidebarModule {

}
