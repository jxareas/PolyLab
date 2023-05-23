import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PanelModule } from './panel/panel.module';
import { AppRoutingModule } from './app-routing.module';
import { IconService } from '../../projects/mds-light/src/lib/service/icons/icon.service';
import { CountryService } from './location/country/service/country.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    PanelModule,
  ],
  providers: [IconService, CountryService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
