import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MdsHeaderModule } from '../../../projects/mds-light/src/lib/components/header/mds-header.module';
import { RouterModule } from '@angular/router';
import { MdsFooterModule } from '../../../projects/mds-light/src/lib/components/footer/mds-footer.module';
import { MdsSidebarModule } from '../../../projects/mds-light/src/lib/components/sidebar/mds-sidebar.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MdsHeaderModule,
    MdsSidebarModule,
    MdsFooterModule,
    RouterModule,
  ],
})
export class PanelModule {}
