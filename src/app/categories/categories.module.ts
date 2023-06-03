import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ProfessionComponent } from './profession/profession.component';
import { GenderComponent } from './gender/gender.component';
import { ReligionComponent } from './religion/religion.component';
import { GenderTableComponent } from './gender/components/gender-table/gender-table.component';
import { GenderDialogComponent } from './gender/components/gender-dialog/gender-dialog.component';
import { ProfessionDialogComponent } from './profession/components/profession-dialog/profession-dialog.component';
import { ProfessionTableComponent } from './profession/components/profession-table/profession-table.component';
import { ReligionTableComponent } from './religion/components/religion-table/religion-table.component';
import { ReligionDialogComponent } from './religion/components/religion-dialog/religion-dialog.component';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { SharedModule } from "primeng/api";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { MdsActionToolbarModule } from "mds-light";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";


@NgModule({
  declarations: [
    ProfessionComponent,
    GenderComponent,
    ReligionComponent,
    GenderTableComponent,
    GenderDialogComponent,
    ProfessionDialogComponent,
    ProfessionTableComponent,
    ReligionTableComponent,
    ReligionDialogComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MdsActionToolbarModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SharedModule,
    TableModule,
    ToastModule,
    MessagesModule,
    MessageModule
  ]
})
export class CategoriesModule { }
