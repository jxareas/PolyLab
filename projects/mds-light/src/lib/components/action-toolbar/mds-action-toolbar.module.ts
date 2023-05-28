import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsActionToolbarComponent } from './mds-action-toolbar.component';
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from "primeng/fileupload";
import { RippleModule } from "primeng/ripple";
import { SharedModule } from "primeng/api";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
  declarations: [MdsActionToolbarComponent],
  imports: [CommonModule, ButtonModule, FileUploadModule, RippleModule, SharedModule, ToolbarModule],
  exports: [MdsActionToolbarComponent],
})
export class MdsActionToolbarModule {}
