import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MdsConfigurationDrawerComponent } from "./mds-configuration-drawer.component";

@NgModule({
  declarations: [MdsConfigurationDrawerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RadioButtonModule,
    SidebarModule,
    InputSwitchModule,
  ],
  exports: [MdsConfigurationDrawerComponent],
})
export class MdsConfigurationModule {}
