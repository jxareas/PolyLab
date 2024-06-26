import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PanelModule } from './panel/panel.module';
import { AppRoutingModule } from './app-routing.module';
import { IconService, LabelService } from "mds-light";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    PanelModule
  ],
  providers: [MessageService, IconService, LabelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
