import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { IconsComponent } from './icons/icons.component';
import { LayoutComponent } from './layout/layout.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [IconsComponent, LayoutComponent],
  imports: [CommonModule, DesignRoutingModule, InputTextModule],
})
export class DesignModule {}
