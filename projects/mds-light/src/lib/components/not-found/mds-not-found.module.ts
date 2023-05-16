import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsNotFoundComponent } from './mds-not-found.component';
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [MdsNotFoundComponent],
  imports: [CommonModule, RouterLink],
  exports: [MdsNotFoundComponent],
})
export class MdsNotFoundModule {}
