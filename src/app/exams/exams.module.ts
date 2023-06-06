import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsRoutingModule } from './exams-routing.module';
import { NormalValuesComponent } from './normal-values/normal-values.component';
import { ExamProfilesComponent } from './exam-profiles/exam-profiles.component';
import { ExamComponent } from './exam/exam.component';
import { NormalValuesTableComponent } from './normal-values/components/normal-values-table/normal-values-table.component';
import { NormalValuesDialogComponent } from './normal-values/components/normal-values-dialog/normal-values-dialog.component';
import { ExamDialogComponent } from './exam/components/exam-dialog/exam-dialog.component';
import { ExamTableComponent } from './exam/components/exam-table/exam-table.component';
import { MdsActionToolbarModule, MdsDeleteSingleModule } from "mds-light";
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ExamService } from './exam/service/exam.service';
import { NormalValuesService } from './normal-values/service/normal-values.service';
import { ExamProfileService } from './exam-profiles/service/exam-profile.service';
import { DropdownModule } from "primeng/dropdown";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";

@NgModule({
  declarations: [
    NormalValuesComponent,
    ExamProfilesComponent,
    ExamComponent,
    NormalValuesTableComponent,
    NormalValuesDialogComponent,
    ExamDialogComponent,
    ExamTableComponent,
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    MdsActionToolbarModule,
    MdsDeleteSingleModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SharedModule,
    DropdownModule,
    MessageModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [ExamService, ExamProfileService, NormalValuesService],
})
export class ExamsModule {}
