import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenseRoutingModule } from './license-routing.module';
import { LicenseComponent } from './license.component';
import { LicenseTextComponent } from './license-text/license-text.component';

@NgModule({
  declarations: [LicenseComponent, LicenseTextComponent],
  imports: [CommonModule, LicenseRoutingModule],
})
export class LicenseModule {}
